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
	var files []string

	root := "./src"

	err := filepath.Walk(root, func(path string, info os.FileInfo, err error) error {
		files = append(files, path)
		return nil
	})

	if err != nil {
		panic(err)
	}

	total := 0
	fileCount := 0

	for _, file := range files {
		f, _ := os.Open(file)

		c, _ := lineCounter(f)

		info, _ := f.Stat()

		if !info.IsDir() {
			fileCount++
		}

		total += c

		f.Close()
	}

	// Print out results
	fmt.Println("Total number of lines: " + strconv.Itoa(total))
	fmt.Println("Total number of files: " + strconv.Itoa(fileCount))
}

// Counts lines in a file
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
