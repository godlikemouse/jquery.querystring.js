/*
 * Copyright 2016 Jason Graves (GodLikeMouse/Collaboradev)
 * http://www.collaboradev.com
 *
 * This file is part of jquery.querystring.js.
 *
 * The jquery.querystring.js plugin is free software: you can redistribute it
 * and/or modify it under the terms of the GNU General Public
 * License as published by the Free Software Foundation, either
 * version 3 of the License, or (at your option) any later version.
 *
 * The jquery.querystring.js plugin is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with the jquery.querystring.js plugin. If not, see http://www.gnu.org/licenses/.
 *
 */
$.queryString = function(uri, options){

	var _ref = this;
	var _location = null;
	var _ie = navigator.userAgent.indexOf("MSIE") > -1 ? true : false;

	//method for uri encoding a string
    function encode(value){
        var regexp = /%20/g;
		return encodeURIComponent(value).replace(regexp,'+');
    }

    //extend default options
	options = $.extend(true, {
		encode: true,
		format: "standard", //standard, zend
		encodeCallback: encode
	}, options);

	_ref.params = {};
	_ref.hash = {};

	//build complete url when casting to string
	_ref.toString = function(){

		var origin = _location.origin;
		var pathname = _location.pathname;

		if(_ie){
			//why, because ie is terrible.
			pathname = "/" + _location.pathname;
			origin = _location.toString().split(pathname)[0];
		}

		var querySeparator = "?";
		var keySeparator = "=";
		var setSeparator = "&";

        //determine composed url format
		switch(options.format){
			case "standard":
				origin += pathname;
				break;

			case "zend":
				querySeparator = "";
				keySeparator = "/";
				setSeparator = "/";
				break;
		}

        //build parameters array
		var params = [];
		for(var i in _ref.params){
			var keyValue = [ i, options.encode ? options.encodeCallback(_ref.params[i]) : _ref.params[i] ];
			params.push( keyValue.join(keySeparator) );
		}

        //compose url
		var url = origin;
		if(params.length)
			url = origin + querySeparator + params.join(setSeparator);

		//build hash array
		var hash = [];
		for(var i in _ref.hash){
			var keyValue = [i, options.encode ? encode(_ref.hash[i]) : _ref.hash[i] ];
			hash.push( keyValue.join("=") );
		}

		//compose url
		if(hash.length)
			url += "#" + hash.join("&");

		return url;
	}

	//constructor
	(function constructor(){

		//fallback to current location
		if(!uri)
			uri = document.location.toString();

		//parse uri information
		_location = $("<a>").attr("href", uri).get(0);

		if(options.format == "standard"){
			//handle standard arguments
			var params = _location.search.toString().replace("?", "").split("&");

			for(var i in params){
				var keyset = params[i].split("=");
				if(keyset[0] && keyset[1])
					_ref.params[ keyset[0] ] = keyset[1];
			}
		}
		else if(options.format == "zend"){
			//handle zend arguments
			var pathname = _location.pathname;
			if(_ie) pathname = "/" + pathname;

			var params = pathname.split("/");

			for(var i=0; i<params.length; i+=2){
				_ref.params[ params[i] ] = params[i+1];
			}
		}

		//handle hash arguments
		var hash = _location.hash.toString().replace("#", "").split("&");

		for(var i in hash){
			var keyset = hash[i].split("=");
			if(keyset[0] && keyset[1])
				_ref.hash[ keyset[0] ] = keyset[1];
		}
	})()

	return _ref;
}

