# Clasp Deploy

## Features

This VS Code extension is used to deploy a Google Apps Script project to Google Drive using the [clasp](https://www.npmjs.com/package/@google/clasp) command line tool and open the associated sheet.

To use, simply run the `Clasp Deploy` command from the command palette. Ensure that the `clasp-deploy.srcDir` and `clasp-deploy.developmentSheetURL` settings are set correctly.

## Requirements

This extension requires the [clasp](https://www.npmjs.com/package/@google/clasp) command line tool to be installed and for a project to be already cloned using `clasp clone`. 

## Extension Settings

This extension contributes the following settings:

* `clasp-deploy.srcDir`: Set to the src directory (or dist) of your project.
* `clasp-deploy.developmentSheetURL`: Set to the spreadsheet you wish to open automatically on deploy.

**Enjoy!**
