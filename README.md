discourse-bbcode-color
======================

A Discourse Plugin to support BBCode color tags.

Usage
=====

In your posts, surround text with `[color=...]` and `[/color]`. Color values are those supported by HTML, like `red` and `#ff000`. For example:

```
Look at my [color=red]red words[/color] and be amazed! Also, [color=#33ff33]green is cool[/color] too.

Works for background colors too!  This is your [bgcolor=yellow]typical yellow highlight[/bgcolor], and [bgcolor=blue] [color=white]you can mix em[/color] [color=red]up, you know?[/color][/bgcolor]
```

Installation
============

* Add the plugin's repo url to your container's yml config file

```yml
hooks:
  after_code:
    - exec:
        cd: $home/plugins
        cmd:
          - mkdir -p plugins
          - git clone https://github.com/discourse/docker_manager.git
          - git clone https://github.com/discourse/discourse-bbcode-color.git
```

* Rebuild the container

```
cd /var/docker
git pull
./launcher rebuild app
```

License
=======

MIT

