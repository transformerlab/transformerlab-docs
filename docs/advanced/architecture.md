---
sidebar_position: 10
---

# Components

Transformer Lab is composed of two main components: the GUI frontend application, and the API server.

## Architecture

### Frontend Application

The frontend application is an [Electron App](https://www.electronjs.org/) with a UI written in [React](https://react.dev/).

The UI Design library used by the application is [MUI-Joy](https://mui.com/joy-ui/getting-started/).

The Icon Library is [Lucide](https://lucide.dev/).

Contained within the UI Application is a sub application that runs on a second webserver that runs [Xterm.js](https://xtermjs.org/) and is backed by [ssh2](https://www.npmjs.com/package/ssh2). This serves as a SSH client with a web-based terminal GUI that can be used by the application but is isolated from it -- they can only talk using message passing.

### API Server

The API Server is a Python application that uses [FastAPI](https://fastapi.tiangolo.com/) as the API server.

It talks to an [SQLite](https://www.sqlite.org/index.html) Database that is stored on the filesystem
