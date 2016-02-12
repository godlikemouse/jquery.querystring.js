jquery.querystring.js
==============

A plugin for handling query string manipulations.

## Compatibility

| Browser | Compatibility |
| ------- | ----- |
| Chrome | Perfect |
| Firefox | Perfect |
| Opera | Perfect |
| Safari | Perfect |
| Internet Explorer | Perfect |


## Usage

(Requires jQuery) Include the jquery.querystring.js or jquery.querystring.min.js file. Instantiate the $.queryString object.

## Quick Start

Instantiate the query string object. This defaults to the current documents origin, protocol and host name.

    var qs = $.queryString();

Add/Change/Delete query string parameters.

    qs.params.key = "hello";
    qs.params.key = "world";
    delete qs.params.key;

    qs.params.key = "value"

Compose the final query string.

    qs.toString(); //returns your current http://url?key=value

## Options

The following table specifies the options available to be used in conjunction with the plugin.

| Name | Description |
| ---- | ----------- |
| encode | Specifies whether or not to uri encode query string arguments (default: true) |
| format | Specifies the format separator to use with the query string. (default: "standard") |

    var qs = $.queryString("some/path", {
        format: "zend"
    });
    qs.params.key = "value";
    document.location = qs.toString() //returns http://url/some/path/key/value

## Community

Keep track of development and community news.

* Follow [@Collaboradev on Twitter](https://twitter.com/collaboradev).
* Follow the [Collaboradev Blog](http://www.collaboradev.com).

## License

jquery.cube.js is released under [GPL, version 2.0](http://www.gnu.org/licenses/gpl-2.0.html)


