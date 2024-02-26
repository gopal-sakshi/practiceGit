`git rev-list`
- very complicated & very central command
- in simple terms
    "rev-list" shows commits in reverse chronological order.

git rev-list main..origin/main
==================================================================================================
rev-parse === plumbing tool
rev ========= short for revision

give the branch name ====> returns the SHA1 
`git rev-parse`
    git rev-parse --short main
    git rev-parse main
    git rev-parse --verify origin/main              // verify if its a valid git object
    git rev-parse --is-inside-git-dir               // returns true only if inside .git directory
    git rev-parse --git-dir                         // display the relative path of .git directory
    git rev-parse --abbrev-ref HEAD                 // get the current branch
==================================================================================================    


`git rev-list `
    git rev-list main                       // prints list of 40-char commit hashes for "main" branch
    
