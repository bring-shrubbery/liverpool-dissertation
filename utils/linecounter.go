// Pretty much everything is written by Antoni Silvestrovic
// Put this file into the same directory as the folder you want
// to scan. By default it scans 'src' folder, but you can provide
// an argument with a path like so 'go run linecounter.go ./path/to/folder'

package main

import (
	"bytes"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"strconv"
)

func main() {
	// File paths
	var files []string

	// Get arguments
	args := os.Args

	// Init root var
	var root string

	// Check if path was provided
	if len(args) > 1 {
		// Assign path from arguments
		root = args[len(args)-1]

		// Check if the path exists
		if _, err := os.Stat(root); os.IsNotExist(err) {
			fmt.Println("Provided path does not exist!")
			return
		}
	} else {
		root = "./src"
	}

	// Walk through the folders and files inside root directory
	err := filepath.Walk(root, func(path string, info os.FileInfo, err error) error {
		files = append(files, path)
		return nil
	})

	// Exit on error (shoulnd't normally execute since at this
	// point paths are pretty much guaranteed to exist)
	if err != nil {
		panic(err)
	}

	// Counters
	totalLines := 0
	fileCount := 0

	// Loop through file paths
	for _, file := range files {
		// Open file, count lines, get stats, check if it's not a directory, cound number of files
		f, _ := os.Open(file)

		c, _ := lineCounter(f)

		info, _ := f.Stat()

		if !info.IsDir() {
			fileCount++
		}

		totalLines += c

		f.Close()
	}

	// Print out results
	fmt.Println("Total number of lines: " + strconv.Itoa(totalLines))
	fmt.Println("Total number of files: " + strconv.Itoa(fileCount))
}

// Counts lines in a file (from stack overflow)
func lineCounter(r io.Reader) (int, error) {
	buf := make([]byte, 32*1024)
	count := 0
	lineSep := []byte{'\n'}

	for {
		c, err := r.Read(buf)
		count += bytes.Count(buf[:c], lineSep)

		switch {
		case err == io.EOF:
			return count, nil

		case err != nil:
			return count, err
		}
	}
}
