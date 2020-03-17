# workspace-cacheclean

A cleaner for workspace cache.

## Why

Why you need this extension?  
We all love how convenient that remote development on vscode, but it seems sometimes goes wrong when loading remote workspace like missing git status in explorer, then the only way to solve such problems is to clean the cached info of workspace.
The cache of workspace usually be stored vscode's cache folder in `Code/User/workspaceStorage/<32-length ID>`, so we will be happy if an extension could do this instead of manually.

## Extension Settings

-   `workspaceCacheClean.silent`: enable/disable message output
-   `workspaceCacheClean.autoReload`: enable/disable auto reload window

```json
"workspaceCacheClean.autoReload": false, // enable/disable message output
"workspaceCacheClean.silent": true // enable/disable auto reload window
```

## Release Notes

### 0.0.2

Make extension works properly on remote workspace by adding "extensionKind".

### 0.0.1

Added features clean `state.vscdb` and `state.vscdb.backup` in current workspace's workspaceStorage.

## License

MIT License
copyright © 2020 MamoruDS
