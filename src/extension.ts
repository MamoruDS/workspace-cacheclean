import * as fs from 'fs'
import * as path from 'path'
import * as vscode from 'vscode'

const reload = () => {
    vscode.commands.executeCommand('workbench.action.reloadWindow')
}

export function activate(context: vscode.ExtensionContext) {
    const _config = vscode.workspace.getConfiguration('workspaceCacheClean')
    let disposable = vscode.commands.registerCommand(
        'extension.wsCacheClean',
        async () => {
            const storagePath = context.storagePath
            const regex = new RegExp(
                '(.*)\\/User\\/workspaceStorage\\/([a-z0-9]{1,32})\\/',
                'i'
            )
            if (typeof storagePath === 'string') {
                const pathRegex = regex.exec(storagePath)
                const targetFiles = ['state.vscdb', 'state.vscdb.backup']
                let hasCachedFile = false
                if (pathRegex !== null) {
                    const _dir = pathRegex[0]
                    for (const file of targetFiles) {
                        const _rmFile = path.join(_dir, file)
                        if (fs.existsSync(_rmFile)) {
                            hasCachedFile = true
                            fs.unlinkSync(_rmFile)
                            const _ =
                                _config.silent ||
                                vscode.window.showInformationMessage(
                                    `Removed:\n${_rmFile}`
                                )
                        }
                    }
                }
                if (hasCachedFile) {
                    if (_config.autoReload) {
                        reload()
                    } else {
                        vscode.window
                            .showInformationMessage(
                                `Reload your workspace.`,
                                'Reload'
                            )
                            .then(btn => {
                                if (btn === 'Reload') {
                                    reload()
                                }
                            })
                    }
                }
            } else {
                vscode.window.showErrorMessage('You are not in a workspace.')
            }
        }
    )

    context.subscriptions.push(disposable)
}

export function deactivate() {}
