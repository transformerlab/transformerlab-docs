#Use the following script to 
# aggregate all the md files into one giant one 
# that can be fed into a LLM for context.

import os
from pathlib import Path

def aggregate_markdown_files():
    # Get the root directory (parent of src)
    root_dir = Path(__file__).parent.parent
    
    # Directories to search
    search_dirs = [root_dir / "docs", root_dir / "for-teams"]
    
    # Collect all .md and .mdx files
    markdown_files = []
    
    for search_dir in search_dirs:
        if search_dir.exists():
            for md_file in search_dir.rglob("*.md"):
                markdown_files.append(md_file)
            for mdx_file in search_dir.rglob("*.mdx"):
                markdown_files.append(mdx_file)
    
    # Sort files for consistent output
    markdown_files.sort()
    
    # Aggregate content
    aggregated_content = []
    
    for file_path in markdown_files:
        # Get relative path for header
        rel_path = file_path.relative_to(root_dir)
        
        # Add file header
        aggregated_content.append(f"\n\n# File: {rel_path}\n\n")
        aggregated_content.append("---\n")
        
        # Read and add file content
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
                aggregated_content.append(content)
        except Exception as e:
            aggregated_content.append(f"[Error reading file: {e}]")
    
    # Write to output file
    output_file = Path(__file__).parent / "aggregated.md"
    with open(output_file, "w", encoding="utf-8") as f:
        f.write("".join(aggregated_content))
    
    print(f"✓ Aggregated {len(markdown_files)} files to {output_file}")

if __name__ == "__main__":
    aggregate_markdown_files()
