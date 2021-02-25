# clonerp

clone all challenge berdasarkan week dan day dengan sekali perintah.

## Background

latar belakang, kenapa **clonerp** ini di buat bisa lihat [disini](https://www.notion.so/Clone-repos-by-day-b9698ff1431b440592925ec7034a37e2).

## Installation

```bash
npm install -g clonerp
```

## Update

```bash
npm update -g clonerp
```

## Prerequisites

1. pastikan pc/laptop kalian sudah terkoneksikan dengan github menggunakan SSH, jika belum bisa [kesini](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh).

## Usage

```bash
clonerp
#   to select a feature

clonerp w<week>d<day>
#   to clone repos by week and day
#   ex: clonerp w1d2
```

### Clone repos 
there are 2 option for clone repo.

1. `clonerp` and the choose action `Clone repos`

![clonerp](./assets/clonerp.gif)

2. `clonerp w<week>d<day>`.

![clonerp-wd](./assets/clonerpwd.gif)


### Set config
set config of batch and phase with the command `clonerp` and then choose `Set config`.

![clonerp-wd](./assets/setconfig.gif)