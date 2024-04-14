#!/bin/sh
echo "Checking commit message..."
echo "Git Hook Triggered: commit-msg should be formatted as 'type: message' and not exceed 88 characters."
echo "git message example: 'feat: add new feature', choose a type from: feat|fix|chore|docs|test|style|refactor|perf|build|ci|revert|enhancement"
if [ ! -f "$1" ]; then
    echo "Aborting commit. No commit message provided." >&2
    exit 1
fi
if ! head -1 "$1" | grep -qE "^(feat|fix|chore|docs|test|style|refactor|perf|build|ci|revert|enhancement)(\(.+?\))?: .{1,}$"; then
    echo "Aborting commit. Your commit message is invalid." >&2
    exit 1
fi
if ! head -1 "$1" | grep -qE "^.{1,88}$"; then
    echo "Aborting commit. Your commit message is too long." >&2
    exit 1
fi
