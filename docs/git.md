
git commit -a -m "message" Stage all tracked, modified files automatically and commit in a single step.

git commit Launch your default editor (Vim, Nano, VS Code, etc.) to write a multi-line commit message.

git commit --amend Replace your most recent commit. Great for fixing typos in the message or adding forgotten changes.

git commit -S Sign your commit with a GPG key to prove authorship.

git commit --author="Name <email>" Override author metadata for that specific commit.

git add -p + git commit Interactively review and stage individual hunks before committing, ensuring surgical commits.

git commit -s Add a “Signed-off-by” trailer (useful for projects requiring a Developer Certificate of Origin).

git commit --allow-empty -m "message" Create an empty commit—for example, to trigger CI or mark a milestone.

Interactive rebasing (git rebase -i HEAD~n) Squash, reorder, or edit multiple commits into a clean sequence with polished messages.