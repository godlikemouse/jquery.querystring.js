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

Instantiate the query string object. This defaults to the current documents origin, protocol and host name.  It will also parse any and all existing query string parameters either currently in the url or passed in.

    var qs = $.queryString();

To iterate all existing query string parameters loop over the params object.

    for(var key in qs.params){
        var value = qs.params[key];
        console.info(key, value);
    }

To iterate all existing hash parameters loop over the hash object.

	for(var key in qs.hash){
		var value = qs.hash[key];
		console.info(key, value);
	}

Add/Change/Delete query string parameters.

    qs.params.key = "hello";
    qs.params.key = "world";
    delete qs.params.key;

    qs.params.key = "value";

Add/Change/Delete hash string parameters

	qs.hash.key = "hello";
	qs.hash.key = "world";
	delete qs.hash.key;

	qs.hash.key = "value";

Compose the final query string.

    qs.toString(); //returns your current http://url?key=value#key=value

## Constructor

    $.queryString(url, options)

| Argument | Description |
| -------- | ----------- |
| url | Specifies either the partial path or the full url. By default the current document.location object will be used if nothing is specified. |
| options | Specifies the options structure to be used. |

## Options

The following table specifies the options available to be used in conjunction with the plugin.

| Name | Description |
| ---- | ----------- |
| encode | Specifies whether or not to uri encode query string arguments (default: true) |
| format | Specifies the format separator to use with the query string, supports "standard" and "zend". (default: "standard") |

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


