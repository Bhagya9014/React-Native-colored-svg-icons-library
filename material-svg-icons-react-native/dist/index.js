'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactNativeSvg = require('react-native-svg');
var PropTypes = _interopDefault(require('prop-types'));

var Chat = function Chat() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', xmlSpace: 'preserve', xmlnsSerif: 'http://www.serif.com/' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Chat' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.620607,0,0,0.359129,8.22586,-0.0991949)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,8.981C45.017,7.25 44.204,5.845 43.203,5.845L7.632,5.845C6.63,5.845 5.817,7.25 5.817,8.981L5.817,41.909C5.817,43.64 6.63,45.045 7.632,45.045L36.789,45.045C36.789,45.045 44.262,58.353 45.017,59.425L45.017,8.981Z', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.702363,0,0,0.406439,8.35691,18.8474)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,8.981C45.017,7.25 44.204,5.845 43.203,5.845L7.632,5.845C6.63,5.845 5.817,7.25 5.817,8.981L5.817,41.909C5.817,43.64 6.63,45.045 7.632,45.045L36.789,45.045C36.789,45.045 44.262,58.353 45.017,59.425L45.017,8.981Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(-0.595037,0,0,0.327029,34.7469,10.9553)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,8.981C45.017,7.25 44.204,5.845 43.203,5.845L7.632,5.845C6.63,5.845 5.817,7.25 5.817,8.981L5.817,41.909C5.817,43.64 6.63,45.045 7.632,45.045L36.789,45.045C36.789,45.045 44.262,58.353 45.017,59.425L45.017,8.981Z', style: { fill: "rgb(56,170,86)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(-0.408943,0,0,0.236645,35.4341,31.9374)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,8.981C45.017,7.25 44.204,5.845 43.203,5.845L7.632,5.845C6.63,5.845 5.817,7.25 5.817,8.981L5.817,41.909C5.817,43.64 6.63,45.045 7.632,45.045L36.789,45.045C36.789,45.045 44.262,58.353 45.017,59.425L45.017,8.981Z', style: { fill: "rgb(233,74,60)" } })
            )
        )
    );
};

var Calendar = function Calendar() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', style: 'fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;' },
        React__default.createElement(
            reactNativeSvg.G,
            { transform: 'matrix(0.408266,0,0,0.408266,4.75525,1.4605)' },
            React__default.createElement(reactNativeSvg.Path, { d: 'M56.8,28.4L56.4,28.3L56.4,28.1L56.8,28.4Z', style: { fillRule: "nonzero" } })
        ),
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Calendar' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.969388,0,0,0.306122,-0.639181,3.21064)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,8.981C45.017,7.25 44.574,5.845 44.027,5.845L6.808,5.845C6.261,5.845 5.817,7.25 5.817,8.981L5.817,41.909C5.817,43.64 6.261,45.045 6.808,45.045L44.027,45.045C44.574,45.045 45.017,43.64 45.017,41.909L45.017,8.981Z', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.986796,0,0,0.986796,-0.716123,0.26697)' },
                React__default.createElement(reactNativeSvg.Rect, { x: '9.39', y: '20.219', width: '9.12', height: '9.12', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.986796,0,0,0.986796,10.2339,0.26697)' },
                React__default.createElement(reactNativeSvg.Rect, { x: '9.39', y: '20.219', width: '9.12', height: '9.12', style: { fill: "rgb(56,170,86)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.986796,0,0,0.986796,21.1838,0.26697)' },
                React__default.createElement(reactNativeSvg.Rect, { x: '9.39', y: '20.219', width: '9.12', height: '9.12', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.986796,0,0,0.986796,-0.716123,11.1896)' },
                React__default.createElement(reactNativeSvg.Rect, { x: '9.39', y: '20.219', width: '9.12', height: '9.12', style: { fill: "rgb(56,170,86)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.986796,0,0,0.986796,10.2339,11.1896)' },
                React__default.createElement(reactNativeSvg.Rect, { x: '9.39', y: '20.219', width: '9.12', height: '9.12', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.986796,0,0,0.986796,21.1838,11.1896)' },
                React__default.createElement(reactNativeSvg.Rect, { x: '9.39', y: '20.219', width: '9.12', height: '9.12', style: { fill: "rgb(56,170,86)" } })
            )
        )
    );
};

var Activity = function Activity() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', style: 'fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Activity' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.430277,0,0,0.430277,-0.452577,2.10521)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M59.7,88.2L46.2,54.5L38.7,35.7L26,59.2L5.7,59.2L5.7,49.8L20.4,49.8L40,13.7L54.9,51L61.9,68.3L74.5,49.8L107.96,49.8L107.96,59.2L79.4,59.2L59.7,88.2Z', style: { fill: "rgb(90,130,194)", fillRule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.342278,0,0,0.40007,12.5482,-2.60186)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M44.196,27.45C44.364,26.925 44.95,26.5 45.507,26.5L57.493,26.5C58.049,26.5 58.327,26.92 58.119,27.426L51.881,42.574C51.671,43.085 51.956,43.5 52.502,43.5L62.498,43.5C63.051,43.5 63.222,43.847 62.87,44.287L42.001,70.374C40.62,72.101 40.043,71.792 40.711,69.693L46.199,52.445C46.365,51.923 46.044,51.5 45.505,51.5L37.495,51.5C36.946,51.5 36.639,51.066 36.804,50.55L44.196,27.45Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.959783,0,0,0.969781,-1.74388,0.932286)' },
                React__default.createElement(reactNativeSvg.Rect, { x: '3.901', y: '30.851', width: '16.67', height: '4.125', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.719837,0,0,1.60014,31.1921,-18.5147)' },
                React__default.createElement(reactNativeSvg.Rect, { x: '3.901', y: '30.851', width: '16.67', height: '4.125', style: { fill: "rgb(56,170,86)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.479892,0,0,0.751581,36.1281,-10.9361)' },
                React__default.createElement(reactNativeSvg.Rect, { x: '3.901', y: '30.851', width: '16.67', height: '4.125', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.695843,0,0,0.751581,31.6857,-5.03609)' },
                React__default.createElement(reactNativeSvg.Rect, { x: '3.901', y: '30.851', width: '16.67', height: '4.125', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.479892,0,0,1.40618,0.128061,-35.3817)' },
                React__default.createElement(reactNativeSvg.Rect, { x: '3.901', y: '30.851', width: '16.67', height: '4.125', style: { fill: "rgb(56,170,86)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.22195,0,0,1.40618,1.13423,-27.7817)' },
                React__default.createElement(reactNativeSvg.Rect, { x: '3.901', y: '30.851', width: '16.67', height: '4.125', style: { fill: "rgb(90,130,194)" } })
            )
        )
    );
};

var AIAnalytics = function AIAnalytics() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', style: 'fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Analytics-Icon', serifId: 'Analytics Icon', transform: 'matrix(0.0696966,0,0,0.0597289,-28.3596,-6.2653)' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.676833,0,0,0.676833,122.496,265.75)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M925.5,614.371L841.575,614.371L694.047,360.37L546.511,614.371L462.597,614.371L694.055,215.834L925.5,614.371Z', style: { fill: "rgb(233,74,60);fill-rule:nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.676833,0,0,0.676833,440.496,265.75)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M925.5,614.371L841.575,614.371L694.047,360.37L546.511,614.371L462.597,614.371L694.055,215.834L925.5,614.371Z', style: { fill: "rgb(56,170,86);fill-rule:nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.676833,0,0,0.676833,281.496,92.7503)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M925.5,614.371L841.575,614.371L694.047,360.37L546.511,614.371L462.597,614.371L694.055,215.834L925.5,614.371Z', style: { fill: "rgb(90,130,194);fill-rule:nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.902685,0,0,0.902685,124.744,220.004)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M925.5,614.371L841.575,614.371L694.047,360.37L546.511,614.371L462.597,614.371L694.055,215.834L925.5,614.371Z', style: { fill: "rgb(246,187,26);fill-rule:nonzero" } })
            )
        )
    );
};

var Design = function Design() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Design', transform: 'matrix(1,0,0,1,3,3.00521)' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.791667,0,0,0.791667,0.416667,0.411458)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M38.6,28L46.7,28C45.5,20 39.7,13.3 31.9,10.9L31.9,19.5C35.3,21.2 37.8,24.3 38.6,28Z', style: { fill: "rgb(56,170,86)", fillRule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.791667,0,0,0.791667,0.416667,0.411458)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M20,19.5L20,10.9C12.2,13.2 6.4,20 5.2,28L13.3,28C14.2,24.3 16.7,21.2 20,19.5Z', style: { fill: "rgb(56,170,86)", fillRule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.791667,0,0,0.791667,0.416667,0.411458)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M26.9,2.5C26.6,1.8 25.4,1.8 25.1,2.5L23.4,6L28.6,6L26.9,2.5Z', style: { fill: "rgb(233,74,60)", fillRule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.791667,0,0,0.791667,0.416667,0.411458)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M30,9C30,8.4 29.5,8 29,8L23,8C22.5,8 22,8.4 22,9L22,28L30,28L30,9Z', style: { fill: "rgb(246,187,26)", fillRule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.791667,0,0,0.791667,0.416667,0.411458)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M22,49C22,49.6 22.5,50 23,50L29,50C29.5,50 30,49.6 30,49L30,44L22,44L22,49Z', style: { fill: "rgb(233,74,60)", fillRule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.791667,0,0,0.791667,0.416667,0.411458)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M2,30L2,42L7,42L7,35L9,35L9,42L11,42L11,37.8L13,37.8L13,42L16,42L16,35L18,35L18,42L21,42L21,37.8L23,37.8L23,42L25,42L25,35L27,35L27,42L29,42L29,37.8L31,37.8L31,42L34,42L34,35L36,35L36,42L39,42L39,37.8L41,37.8L41,42L43,42L43,35L45,35L45,42L50,42L50,30L2,30Z', style: { fill: "rgb(90,130,194)", fillRule: "nonzero" } })
            )
        )
    );
};

var Checklist = function Checklist() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { transform: 'matrix(0.408266,0,0,0.408266,4.75525,1.4605)' },
            React__default.createElement(reactNativeSvg.Path, { d: 'M56.8,28.4L56.4,28.3L56.4,28.1L56.8,28.4Z', style: { fillRule: "nonzero" } })
        ),
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Items' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.612245,0,0,0.153061,-1.56159,7.10532)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,15.645C45.017,10.236 43.919,5.845 42.567,5.845L8.267,5.845C6.915,5.845 5.817,10.236 5.817,15.645L5.817,35.245C5.817,40.654 6.915,45.045 8.267,45.045L42.567,45.045C43.919,45.045 45.017,40.654 45.017,35.245L45.017,15.645Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.612245,0,0,0.153061,-1.56159,17.3493)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,15.645C45.017,10.236 43.919,5.845 42.567,5.845L8.267,5.845C6.915,5.845 5.817,10.236 5.817,15.645L5.817,35.245C5.817,40.654 6.915,45.045 8.267,45.045L42.567,45.045C43.919,45.045 45.017,40.654 45.017,35.245L45.017,15.645Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.612245,0,0,0.153061,-1.56159,27.5933)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,15.645C45.017,10.236 43.919,5.845 42.567,5.845L8.267,5.845C6.915,5.845 5.817,10.236 5.817,15.645L5.817,35.245C5.817,40.654 6.915,45.045 8.267,45.045L42.567,45.045C43.919,45.045 45.017,40.654 45.017,35.245L45.017,15.645Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1.62215,0,0,1.39405,-25.5779,-10.4379)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M36.914,18.445L42.403,13.226L44.125,15.038L37.46,21.375L36.924,21.93L36.9,21.907L36.878,21.928L36.383,21.408L33.351,18.48L35.088,16.682L36.914,18.445Z', style: { fill: "rgb(56,170,86)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1.62215,0,0,1.39405,-25.5779,-0.504626)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M36.914,18.445L42.403,13.226L44.125,15.038L37.46,21.375L36.924,21.93L36.9,21.907L36.878,21.928L36.383,21.408L33.351,18.48L35.088,16.682L36.914,18.445Z', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1.62215,0,0,1.39405,-25.5779,9.4286)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M36.914,18.445L42.403,13.226L44.125,15.038L37.46,21.375L36.924,21.93L36.9,21.907L36.878,21.928L36.383,21.408L33.351,18.48L35.088,16.682L36.914,18.445Z', style: { fill: "rgb(90,130,194)" } })
            )
        )
    );
};

var Budget = function Budget() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', style: 'fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Budget', transform: 'matrix(1.23487,0,0,1.23487,-3.57672,-6.25672)' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.740913,0,0,0.740913,7.52061,11.1022)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M1.715,13.048C1.015,13.599 0.315,14.15 -0.385,14.702L-0.776,15.013L4.791,22.077L1.715,13.048Z', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,7.72174,7.72174)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M16.501,1.394L16.109,1.703C11.801,5.098 7.492,8.494 3.184,11.889L8.873,9.951L14.555,5.474L14.865,5.737C15.48,6.255 16.343,6.353 17.066,5.989L17.432,5.804L18.196,6.775L20.202,6.092L16.501,1.394Z', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,7.72174,7.72174)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M27.996,18.002L25.996,18.002L25.996,17.041L25.596,16.961C24.802,16.8 24.186,16.187 24.023,15.4L23.941,15.002L10.055,15.002L9.973,15.4C9.809,16.187 9.192,16.799 8.398,16.959L7.996,17.039L7.996,20.951L8.398,21.033C9.195,21.195 9.813,21.81 9.973,22.6L10.053,23L18.996,23L19.185,23.837C19.353,24.058 19.521,24.279 19.689,24.5L19.285,25L5.996,25L5.996,13.002L27.996,13.002L27.996,18.002ZM16.996,16C15.323,16 13.98,17.339 13.98,19C13.98,20.655 15.313,21.987 16.977,21.998L17.016,21.998C17.876,21.988 18.647,21.633 19.193,21.057C19.219,21.03 19.241,20.998 19.266,20.969C19.1,20.681 18.996,20.355 18.996,20C18.996,19.281 19.386,18.653 19.961,18.301C19.843,17.894 19.642,17.525 19.461,17.27C18.915,16.502 18.018,16 16.996,16Z', style: { fill: "rgb(56,170,86)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,7.72174,7.30492)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M28.996,27L20.996,27C20.433,27 19.996,26.563 19.996,26C19.996,25.437 20.433,25 20.996,25L28.996,25C29.559,25 29.996,25.437 29.996,26C29.996,26.563 29.559,27 28.996,27Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,7.72174,10.0965)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M28.996,27L20.996,27C20.433,27 19.996,26.563 19.996,26C19.996,25.437 20.433,25 20.996,25L28.996,25C29.559,25 29.996,25.437 29.996,26C29.996,26.563 29.559,27 28.996,27Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,-3.48589,10.0965)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M28.996,27L20.996,27C20.433,27 19.996,26.563 19.996,26C19.996,25.437 20.433,25 20.996,25L28.996,25C29.559,25 29.996,25.437 29.996,26C29.996,26.563 29.559,27 28.996,27Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,7.72174,12.8881)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M28.996,27L20.996,27C20.433,27 19.996,26.563 19.996,26C19.996,25.437 20.433,25 20.996,25L28.996,25C29.559,25 29.996,25.437 29.996,26C29.996,26.563 29.559,27 28.996,27Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,-3.48589,12.8881)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M28.996,27L20.996,27C20.433,27 19.996,26.563 19.996,26C19.996,25.437 20.433,25 20.996,25L28.996,25C29.559,25 29.996,25.437 29.996,26C29.996,26.563 29.559,27 28.996,27Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,7.72174,7.51333)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M28.996,24L20.996,24C20.433,24 19.996,23.563 19.996,23C19.996,22.437 20.433,22 20.996,22L28.996,22C29.559,22 29.996,22.437 29.996,23C29.996,23.563 29.559,24 28.996,24Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,7.72174,7.72174)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M28.996,21L20.996,21C20.433,21 19.996,20.563 19.996,20C19.996,19.437 20.433,19 20.996,19L28.996,19C29.559,19 29.996,19.437 29.996,20C29.996,20.563 29.559,21 28.996,21Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,7.72174,7.72174)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M4.996,12.625C4.156,12.922 3.315,13.217 2.475,13.514L2.004,13.682L4.996,22.164L4.996,12.625ZM22.75,6.361L22.279,6.527C17.106,8.352 11.933,10.177 6.76,12.002L12.77,12.002L19.592,9.596L19.801,9.945C20.216,10.633 21.001,11.005 21.803,10.893L22.209,10.836L22.619,12.002L24.738,12.002L22.75,6.361Z', style: { fill: "rgb(90,130,194)" } })
            )
        )
    );
};

var EMS = function EMS() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'EMS' },
            React__default.createElement(reactNativeSvg.Path, { d: 'M32,43L16,43C16,43 18,34.667 20,33C21.864,31.446 26.136,31.446 28,33C29.999,34.666 31.998,42.993 32,43ZM24,35.917C24.828,35.917 25.5,36.59 25.5,37.417C25.5,38.245 24.828,38.917 24,38.917C23.172,38.917 22.5,38.245 22.5,37.417C22.5,36.59 23.172,35.917 24,35.917Z', style: { fill: "rgb(233,74,60)" } }),
            React__default.createElement(reactNativeSvg.Path, { d: 'M18.932,31.164C18.932,31.164 16.531,34.874 16.074,35.54C14.658,34.567 13.433,33.342 12.46,31.926C13.814,30.996 14.363,29.72 14.107,28.098C13.14,26.77 11.85,26.256 10.235,26.556C9.922,24.866 9.922,23.134 10.235,21.444C11.85,21.744 13.14,21.23 14.107,19.902C14.363,18.28 13.814,17.004 12.46,16.074C13.433,14.658 14.658,13.433 16.074,12.46C17.004,13.814 18.28,14.363 19.902,14.107C21.23,13.14 21.744,11.85 21.444,10.235C23.134,9.922 24.866,9.922 26.556,10.235C26.256,11.85 26.77,13.14 28.098,14.107C29.72,14.363 30.996,13.814 31.926,12.46C33.342,13.433 34.567,14.658 35.54,16.074C34.186,17.004 33.637,18.28 33.893,19.902C34.86,21.23 36.15,21.744 37.765,21.444C38.078,23.134 38.078,24.866 37.765,26.556C36.15,26.256 34.86,26.77 33.893,28.098C33.637,29.72 34.186,30.996 35.54,31.926C34.567,33.342 33.342,34.567 31.926,35.54C31.469,34.874 29.068,31.164 29.068,31.164C31.311,29.573 32.776,26.956 32.776,24C32.776,19.156 28.844,15.224 24,15.224C19.156,15.224 15.224,19.156 15.224,24C15.224,26.956 16.689,29.573 18.932,31.164Z', style: { fill: "rgb(90,130,194)" } }),
            React__default.createElement(reactNativeSvg.Path, { d: 'M15.367,36.265L13.562,39.875C8.406,36.476 5,30.633 5,24C5,13.514 13.514,5 24,5C34.486,5 43,13.514 43,24C43,30.633 39.594,36.476 34.438,39.875L32.633,36.265C36.483,33.549 39,29.066 39,24C39,15.721 32.279,9 24,9C15.721,9 9,15.721 9,24C9,29.066 11.517,33.549 15.367,36.265Z', style: { fill: "rgb(56,170,86)" } }),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.476032,0,0,0.476032,12.1478,11.8961)' },
                React__default.createElement(reactNativeSvg.Circle, { cx: '24.898', cy: '25.427', r: '12.604', style: { fill: "rgb(246,187,26)" } })
            )
        )
    );
};

var Groups = function Groups() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { transform: 'matrix(0.858209,0,0,0.858209,18.4982,3.90103)' },
            React__default.createElement(reactNativeSvg.Circle, { cx: '20.374', cy: '23.704', r: '5.826', style: { fill: "rgb(56,170,86)" } })
        ),
        React__default.createElement(
            reactNativeSvg.G,
            { transform: 'matrix(0.858209,0,0,0.858209,6.51492,11.6567)' },
            React__default.createElement(reactNativeSvg.Circle, { cx: '20.374', cy: '23.704', r: '5.826', style: { fill: "rgb(246,187,26)" } })
        ),
        React__default.createElement(
            reactNativeSvg.G,
            { transform: 'matrix(0.858209,0,0,0.858209,6.51492,-4.34329)' },
            React__default.createElement(reactNativeSvg.Circle, { cx: '20.374', cy: '23.704', r: '5.826', style: { fill: "rgb(233,74,60)" } })
        ),
        React__default.createElement(reactNativeSvg.Path, { d: 'M18,32C18,35.312 20.689,38 24,38C27.311,38 30,35.311 30,32L31.76,32C31.892,32 32,32.287 32,32.64L32,39.36C32,39.713 31.893,40 31.76,40L16.24,40C16.108,40 16,39.713 16,39.36L16,32.64C16,32.287 16.108,32 16.24,32L18,32Z', style: { fill: "rgb(246,187,26)" } }),
        React__default.createElement(reactNativeSvg.Path, { d: 'M38,18.592L38,16.24C38,16.108 38.287,16 38.64,16L45.36,16C45.713,16 46,16.108 46,16.24L46,31.76C46,31.892 45.713,32 45.36,32L38.64,32C38.287,32 38,31.892 38,31.76L38,29.896C40.321,29.067 41.983,26.848 41.983,24.244C41.983,21.64 40.321,19.421 38,18.592Z', style: { fill: "rgb(246,187,26)" } }),
        React__default.createElement(reactNativeSvg.Path, { d: 'M9.36,32L2.64,32C2.287,32 2,31.892 2,31.76L2,16.24C2,16.108 2.287,16 2.64,16L9.36,16C9.713,16 10,16.108 10,16.24L10,18.592C7.679,19.421 6.017,21.64 6.017,24.244C6.017,26.848 7.679,29.067 10,29.896L10,31.76C10,31.892 9.713,32 9.36,32Z', style: { fill: "rgb(246,187,26)" } }),
        React__default.createElement(reactNativeSvg.Path, { d: 'M18,16L16.24,16C16.108,16 16,15.713 16,15.36L16,8.64C16,8.287 16.108,8 16.24,8L31.76,8C31.892,8 32,8.287 32,8.64L32,15.36C32,15.713 31.893,16 31.76,16L30,16C30,12.689 27.311,10 24,10C20.715,10 18.043,12.646 18,16Z', style: { fill: "rgb(246,187,26)" } }),
        React__default.createElement(
            reactNativeSvg.G,
            { transform: 'matrix(0.858209,0,0,0.858209,-5.46835,3.90103)' },
            React__default.createElement(reactNativeSvg.Circle, { cx: '20.374', cy: '23.704', r: '5.826', style: { fill: "rgb(90,130,194)" } })
        )
    );
};

var Tasks = function Tasks() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Tasks' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.680495,0,0,0.656346,3.89017,12.871)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M15.273,34.742L40.903,15.432L45.716,21.822L13.769,45.891L13.738,45.85L13.666,45.904L1.631,29.93L8.02,25.116L15.273,34.742Z', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.583281,0,0,0.562582,16.3344,0.218023)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M15.273,34.742L40.903,15.432L45.716,21.822L13.769,45.891L13.738,45.85L13.666,45.904L1.631,29.93L8.02,25.116L15.273,34.742Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.499955,0,0,0.482213,4.18461,-2.44169)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M15.273,34.742L40.903,15.432L45.716,21.822L13.769,45.891L13.738,45.85L13.666,45.904L1.631,29.93L8.02,25.116L15.273,34.742Z', style: { fill: "rgb(56,170,86)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.416629,0,0,0.401844,23.9532,24.5537)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M15.273,34.742L40.903,15.432L45.716,21.822L13.769,45.891L13.738,45.85L13.666,45.904L1.631,29.93L8.02,25.116L15.273,34.742Z', style: { fill: "rgb(90,130,194)" } })
            )
        )
    );
};

var Meetings = function Meetings() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { transform: 'matrix(0.408266,0,0,0.408266,4.75525,1.4605)' },
            React__default.createElement(reactNativeSvg.Path, { d: 'M56.8,28.4L56.4,28.3L56.4,28.1L56.8,28.4Z', style: { fillRule: "nonzero" } })
        ),
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Meetings' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.466097,0,0,0.466097,-409.496,-103.601)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M882.855,286.554C882.855,286.554 910.562,272.086 930.055,272.086C949.548,272.086 977.256,286.554 977.256,286.554C974.516,294.781 954.413,301.176 930.055,301.176C905.697,301.176 885.595,294.781 882.855,286.554Z', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.789287,0,0,0.789287,-6.21394,-5.98309)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M20.786,34.395C23.137,36.041 24.752,39.436 24.752,43.354C24.752,48.882 10.407,48.882 10.407,43.354C10.407,39.643 11.855,36.401 14.005,34.671C14.744,35.845 15.952,36.61 17.316,36.61C18.783,36.61 20.07,35.724 20.786,34.395ZM17.343,28.475C19.108,28.475 20.541,29.908 20.541,31.673C20.541,33.438 19.108,35.291 17.343,35.291C15.578,35.291 14.145,33.438 14.145,31.673C14.145,29.908 15.578,28.475 17.343,28.475Z', style: { fill: "rgb(56,170,86)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.789287,0,0,0.789287,10.125,-11.488)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M20.786,34.395C23.137,36.041 24.752,39.436 24.752,43.354C24.752,48.882 10.407,48.882 10.407,43.354C10.407,39.643 11.855,36.401 14.005,34.671C14.744,35.845 15.952,36.61 17.316,36.61C18.783,36.61 20.07,35.724 20.786,34.395ZM17.343,28.475C19.108,28.475 20.541,29.908 20.541,31.673C20.541,33.438 19.108,35.291 17.343,35.291C15.578,35.291 14.145,33.438 14.145,31.673C14.145,29.908 15.578,28.475 17.343,28.475Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.789287,0,0,0.789287,26.4639,-5.98309)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M20.786,34.395C23.137,36.041 24.752,39.436 24.752,43.354C24.752,48.882 10.407,48.882 10.407,43.354C10.407,39.643 11.855,36.401 14.005,34.671C14.744,35.845 15.952,36.61 17.316,36.61C18.783,36.61 20.07,35.724 20.786,34.395ZM17.343,28.475C19.108,28.475 20.541,29.908 20.541,31.673C20.541,33.438 19.108,35.291 17.343,35.291C15.578,35.291 14.145,33.438 14.145,31.673C14.145,29.908 15.578,28.475 17.343,28.475Z', style: { fill: "rgb(233,74,60)" } })
            )
        )
    );
};

var Project = function Project() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { transform: 'matrix(0.408266,0,0,0.408266,4.75525,1.4605)' },
            React__default.createElement(reactNativeSvg.Path, { d: 'M56.8,28.4L56.4,28.3L56.4,28.1L56.8,28.4Z', style: { fillRule: "nonzero" } })
        ),
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Projects' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.558165,0,0,0.176263,11.415,19.515)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,8.981C45.017,7.25 44.574,5.845 44.027,5.845L6.808,5.845C6.261,5.845 5.817,7.25 5.817,8.981L5.817,41.909C5.817,43.64 6.261,45.045 6.808,45.045L44.027,45.045C44.574,45.045 45.017,43.64 45.017,41.909L45.017,8.981Z', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.700955,0,0,0.176263,14.4449,28.6993)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,8.981C45.017,7.25 44.664,5.845 44.229,5.845L6.606,5.845C6.171,5.845 5.817,7.25 5.817,8.981L5.817,41.909C5.817,43.64 6.171,45.045 6.606,45.045L44.229,45.045C44.664,45.045 45.017,43.64 45.017,41.909L45.017,8.981Z', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.306122,0,0,0.816327,0.219206,3.22838)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,7.021C45.017,6.372 43.612,5.845 41.881,5.845L8.953,5.845C7.222,5.845 5.817,6.372 5.817,7.021L5.817,43.869C5.817,44.518 7.222,45.045 8.953,45.045L41.881,45.045C43.612,45.045 45.017,44.518 45.017,43.869L45.017,7.021Z', style: { fill: "rgb(56,170,86)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.407353,0,0,0.176263,4.40699,10.3306)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,8.981C45.017,7.25 44.409,5.845 43.66,5.845L7.174,5.845C6.425,5.845 5.817,7.25 5.817,8.981L5.817,41.909C5.817,43.64 6.425,45.045 7.174,45.045L43.66,45.045C44.409,45.045 45.017,43.64 45.017,41.909L45.017,8.981Z', style: { fill: "rgb(246,187,26)" } })
            )
        )
    );
};

var Target = function Target() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Target' },
            React__default.createElement(reactNativeSvg.Path, { d: 'M42.595,14.239C44.131,17.156 45,20.477 45,24C45,35.59 35.59,45 24,45C12.41,45 3,35.59 3,24C3,12.41 12.41,3 24,3C27.564,3 30.923,3.89 33.864,5.46L31.666,9.19C29.37,7.998 26.763,7.325 24,7.325C14.797,7.325 7.325,14.797 7.325,24C7.325,33.203 14.797,40.675 24,40.675C33.203,40.675 40.675,33.203 40.675,24C40.675,21.26 40.013,18.673 38.839,16.391L42.595,14.239Z', style: { fill: "rgb(90,130,194)" } }),
            React__default.createElement(reactNativeSvg.Path, { d: 'M36.521,17.694C37.479,19.59 38.018,21.732 38.018,24C38.018,31.737 31.737,38.018 24,38.018C16.263,38.018 9.982,31.737 9.982,24C9.982,16.263 16.263,9.982 24,9.982C26.279,9.982 28.431,10.527 30.334,11.493L28.2,15.115C26.926,14.511 25.502,14.173 24,14.173C18.576,14.173 14.173,18.576 14.173,24C14.173,29.424 18.576,33.827 24,33.827C29.424,33.827 33.827,29.424 33.827,24C33.827,22.49 33.486,21.06 32.877,19.782L36.521,17.694Z', style: { fill: "rgb(56,170,86)" } }),
            React__default.createElement(reactNativeSvg.Path, { d: 'M31.282,20.695C31.74,21.703 31.996,22.822 31.996,24C31.996,28.413 28.413,31.996 24,31.996C19.587,31.996 16.004,28.413 16.004,24C16.004,19.587 19.587,16.004 24,16.004C25.163,16.004 26.268,16.253 27.265,16.7L25.331,19.983C24.912,19.844 24.465,19.769 24,19.769C21.665,19.769 19.769,21.665 19.769,24C19.769,26.335 21.665,28.231 24,28.231C26.335,28.231 28.231,26.335 28.231,24C28.231,23.503 28.145,23.026 27.987,22.583L31.282,20.695Z', style: { fill: "rgb(233,74,60)" } }),
            React__default.createElement(reactNativeSvg.Path, { d: 'M41.519,2.727C43.599,2.727 45.287,4.416 45.287,6.495L45.287,12.698L43.474,13.736L42.875,13.117L23.889,23.994L35.055,5.046L34.466,4.438L35.475,2.727L41.519,2.727Z', style: { fill: "rgb(246,187,26)" } })
        )
    );
};

var Polls = function Polls() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { transform: 'matrix(0.408266,0,0,0.408266,4.75525,1.4605)' },
            React__default.createElement(reactNativeSvg.Path, { d: 'M56.8,28.4L56.4,28.3L56.4,28.1L56.8,28.4Z', style: { fillRule: "nonzero" } })
        ),
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Polls' },
            React__default.createElement(reactNativeSvg.Path, { d: 'M42.76,32C42.892,32 43,32.108 43,32.24L43,34.76C43,34.892 42.892,35 42.76,35L5.24,35C5.195,35 5.152,34.987 5.116,34.966L5.116,34.965C5.116,34.965 5.114,34.964 5.114,34.964C5.046,34.922 5,34.846 5,34.76L5,5.24C5,5.108 5.108,5 5.24,5L7.76,5C7.892,5 8,5.108 8,5.24L8,32L42.76,32Z', style: { fill: "rgb(90,130,194)" } }),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.153061,0,0,0.306122,10.6888,15.2106)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,7.413C45.017,6.548 43.612,5.845 41.881,5.845L8.953,5.845C7.222,5.845 5.817,6.548 5.817,7.413L5.817,43.477C5.817,44.343 7.222,45.045 8.953,45.045L41.881,45.045C43.612,45.045 45.017,44.343 45.017,43.477L45.017,7.413Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.153061,0,0,0.612245,20.1096,1.42128)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,6.629C45.017,6.197 43.612,5.845 41.881,5.845L8.953,5.845C7.222,5.845 5.817,6.197 5.817,6.629L5.817,44.261C5.817,44.694 7.222,45.045 8.953,45.045L41.881,45.045C43.612,45.045 45.017,44.694 45.017,44.261L45.017,6.629Z', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.153061,0,0,0.459184,29.5304,8.31596)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,6.891C45.017,6.314 43.612,5.845 41.881,5.845L8.953,5.845C7.222,5.845 5.817,6.314 5.817,6.891L5.817,44C5.817,44.577 7.222,45.045 8.953,45.045L41.881,45.045C43.612,45.045 45.017,44.577 45.017,44L45.017,6.891Z', style: { fill: "rgb(56,170,86)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.353305,0,0,0.353305,7.90243,26.218)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M20.786,34.395C23.137,36.041 24.752,39.436 24.752,43.354C24.752,48.882 10.407,48.882 10.407,43.354C10.407,39.643 11.855,36.401 14.005,34.671C14.744,35.845 15.952,36.61 17.316,36.61C18.783,36.61 20.07,35.724 20.786,34.395ZM17.343,28.475C19.108,28.475 20.541,29.908 20.541,31.673C20.541,33.438 19.108,35.291 17.343,35.291C15.578,35.291 14.145,33.438 14.145,31.673C14.145,29.908 15.578,28.475 17.343,28.475Z', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.353305,0,0,0.353305,17.5562,26.218)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M20.786,34.395C23.137,36.041 24.752,39.436 24.752,43.354C24.752,48.882 10.407,48.882 10.407,43.354C10.407,39.643 11.855,36.401 14.005,34.671C14.744,35.845 15.952,36.61 17.316,36.61C18.783,36.61 20.07,35.724 20.786,34.395ZM17.343,28.475C19.108,28.475 20.541,29.908 20.541,31.673C20.541,33.438 19.108,35.291 17.343,35.291C15.578,35.291 14.145,33.438 14.145,31.673C14.145,29.908 15.578,28.475 17.343,28.475Z', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.353305,0,0,0.353305,27.21,26.218)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M20.786,34.395C23.137,36.041 24.752,39.436 24.752,43.354C24.752,48.882 10.407,48.882 10.407,43.354C10.407,39.643 11.855,36.401 14.005,34.671C14.744,35.845 15.952,36.61 17.316,36.61C18.783,36.61 20.07,35.724 20.786,34.395ZM17.343,28.475C19.108,28.475 20.541,29.908 20.541,31.673C20.541,33.438 19.108,35.291 17.343,35.291C15.578,35.291 14.145,33.438 14.145,31.673C14.145,29.908 15.578,28.475 17.343,28.475Z', style: { fill: "rgb(90,130,194)" } })
            )
        )
    );
};

var Promotion = function Promotion() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { transform: 'matrix(0.408266,0,0,0.408266,4.75525,1.4605)' },
            React__default.createElement(reactNativeSvg.Path, { d: 'M56.8,28.4L56.4,28.3L56.4,28.1L56.8,28.4Z', style: 'fill-rule:nonzero;' })
        ),
        React__default.createElement(
            reactNativeSvg.G,
            { transform: 'matrix(1,0,0,1,2.34962,-2.5538)' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(-0.0951716,0,0,0.0951716,44.7441,2.35676)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M433.624,342.463L397.289,306.128L360.316,343.1L327.947,375.47L261.115,442.301L266.937,448.123C273.394,454.58 283.445,455.745 291.207,450.937L354.816,411.543L359.679,416.406C371.236,427.964 389.973,427.964 401.53,416.406L417.577,400.359L433.624,384.312C445.182,372.757 445.182,354.02 433.624,342.463Z', style: { fill: "rgb(246,187,26)", fillRule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(-0.0951716,0,0,0.0951716,45.0056,3.83368)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M267.471,396.033L286.76,375.366C275.994,365.317 271.757,355.373 273.809,344.962C274.311,342.416 275.141,340.106 276.052,338.121C285.387,344.722 294.567,352.035 303.306,360.133L340.279,323.16L377.251,286.187C325.982,230.851 305.921,157.856 301.565,139.79L316.051,125.304L296.063,105.315L121.591,279.787L141.58,299.776L156.91,284.447C169.702,287.53 210.026,298.491 252.13,322.826C243.293,339.701 238.024,368.548 267.471,396.033Z', style: { fill: "rgb(56,170,86)", fillRule: "nonzero" } })
            )
        ),
        React__default.createElement(
            reactNativeSvg.G,
            { transform: 'matrix(-1.70943,0,0,-1.70943,70.327,55.5863)' },
            React__default.createElement(reactNativeSvg.Path, { d: 'M17.992,15.553L20.044,17.605C19.31,18.559 18.873,19.754 18.873,21.05C18.873,24.171 21.407,26.706 24.529,26.706C25.825,26.706 27.019,26.269 27.974,25.535L30.026,27.587C28.54,28.838 26.622,29.592 24.529,29.592C19.814,29.592 15.986,25.765 15.986,21.05C15.986,18.957 16.74,17.039 17.992,15.553Z', style: { fill: "rgb(90,130,194)" } })
        ),
        React__default.createElement(
            reactNativeSvg.G,
            { transform: 'matrix(0.92407,0,0,0.92407,5.43278,0.449485)' },
            React__default.createElement(reactNativeSvg.Path, { d: 'M20.085,13.754C21.38,12.963 22.902,12.507 24.529,12.507C29.243,12.507 33.071,16.335 33.071,21.05C33.071,22.677 32.615,24.198 31.825,25.493L29.692,23.36C30.008,22.655 30.185,21.873 30.185,21.05C30.185,17.928 27.65,15.394 24.529,15.394C23.706,15.394 22.924,15.57 22.218,15.887L20.085,13.754Z', style: { fill: "rgb(233,74,60)" } })
        )
    );
};

var Event = function Event() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Event' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.399579,0,0,0.411255,4.04101,3.43723)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M89.2,13.1L81.4,13.1L81.4,16.7C81.4,23.1 76.2,28.3 69.8,28.3C63.4,28.3 58.3,23.1 58.3,16.7L58.3,13.1L41.7,13.1L41.7,16.7C41.7,23.1 36.5,28.3 30.2,28.3C23.8,28.3 18.6,23.1 18.6,16.7L18.6,13.1L10.8,13.1C6.2,13.1 2.5,16.8 2.5,21.4L2.5,36.9L97.5,36.9L97.5,21.4C97.5,16.9 93.8,13.1 89.2,13.1Z', style: { fill: "rgb(246,187,26)", fillRule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.399579,0,0,0.411255,4.04101,3.43723)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M30.2,22.4C33.4,22.4 35.9,19.8 35.9,16.7L35.9,9.5C35.9,6.3 33.3,3.8 30.2,3.8C27,3.8 24.5,6.4 24.5,9.5L24.5,16.7C24.4,19.9 27,22.4 30.2,22.4Z', style: { fill: "rgb(90,130,194)", fillRule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.399579,0,0,0.411255,4.04101,3.43723)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M69.8,22.4C73,22.4 75.5,19.8 75.5,16.7L75.5,9.5C75.5,6.3 72.9,3.8 69.8,3.8C66.6,3.8 64.1,6.4 64.1,9.5L64.1,16.7C64.1,19.9 66.6,22.4 69.8,22.4Z', style: { fill: "rgb(56,170,86)", fillRule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.844181,0,0,0.844181,3.73654,3.98603)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M39.644,43L8.356,43C6.518,43 5.04,41.478 5.04,39.587L5,39.587L5,20.998L42.96,20.998L42.96,39.587C42.96,41.478 41.482,43 39.644,43ZM24.18,35.926L26.417,37.119C26.937,37.407 27.576,36.955 27.456,36.338L27.057,33.829C27.017,33.665 27.097,33.459 27.217,33.335L29.015,31.526C29.454,31.074 29.215,30.333 28.615,30.251L26.178,29.881C26.018,29.84 25.858,29.716 25.778,29.552L24.659,27.208C24.38,26.673 23.62,26.673 23.341,27.208L22.262,29.47C22.182,29.675 22.062,29.758 21.862,29.799L19.385,30.169C18.785,30.292 18.546,31.032 18.985,31.526L20.743,33.294C20.863,33.418 20.943,33.623 20.903,33.788L20.464,36.338C20.344,36.955 20.983,37.407 21.503,37.119L23.66,35.926L24.18,35.926ZM36.125,30.182C36.128,30.182 37.188,31.775 37.188,31.775C37.188,31.775 39.023,32.269 39.031,32.293C39.031,32.296 37.844,33.796 37.844,33.796C37.844,33.796 37.941,35.694 37.921,35.709C37.918,35.711 36.125,35.046 36.125,35.046C36.125,35.046 34.35,35.725 34.329,35.709C34.327,35.708 34.405,33.796 34.405,33.796C34.405,33.796 33.211,32.318 33.219,32.293C33.22,32.291 35.062,31.775 35.062,31.775C35.062,31.775 36.099,30.182 36.125,30.182ZM11.835,30.182C11.838,30.182 12.898,31.775 12.898,31.775C12.898,31.775 14.733,32.269 14.741,32.293C14.742,32.296 13.555,33.796 13.555,33.796C13.555,33.796 13.652,35.694 13.631,35.709C13.629,35.711 11.835,35.046 11.835,35.046C11.835,35.046 10.06,35.725 10.039,35.709C10.037,35.708 10.116,33.796 10.116,33.796C10.116,33.796 8.922,32.318 8.93,32.293C8.93,32.291 10.773,31.775 10.773,31.775C10.773,31.775 11.81,30.182 11.835,30.182Z', style: { fill: "rgb(233,74,60)" } })
            )
        )
    );
};

var Eventdata = function Eventdata() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Event-Data', serifId: 'Event Data' },
            React__default.createElement(reactNativeSvg.Path, { d: 'M9.761,38.161L5.107,17.224C4.687,15.307 5.91,13.381 7.822,12.951L33.966,7.119C35.88,6.695 37.804,7.922 38.232,9.839L42.912,30.772C43.333,32.689 42.11,34.615 40.198,35.046L14.026,40.881C12.112,41.305 10.188,40.078 9.761,38.161ZM35.312,10.053L40.154,31.814L12.689,37.947L7.846,16.186L35.312,10.053Z', style: { fill: "rgb(246,187,26)" } }),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.976369,-0.216111,0.125782,0.568273,-3.91345,16.2593)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M15.539,21.013C15.539,20.523 15.141,20.125 14.651,20.125L13.467,20.125C12.977,20.125 12.579,20.523 12.579,21.013L12.579,30.197C12.579,30.687 12.977,31.085 13.467,31.085L14.651,31.085C15.141,31.085 15.539,30.687 15.539,30.197L15.539,21.013Z', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.976369,-0.216111,0.305934,1.38218,-5.55349,-9.02095)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M15.539,21.013C15.539,20.523 15.141,20.125 14.651,20.125L13.467,20.125C12.977,20.125 12.579,20.523 12.579,21.013L12.579,30.197C12.579,30.687 12.977,31.085 13.467,31.085L14.651,31.085C15.141,31.085 15.539,30.687 15.539,30.197L15.539,21.013Z', style: { fill: "rgb(56,170,86)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.976369,-0.216111,0.216111,0.976369,1.39867,3.58775)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M15.539,21.013C15.539,20.523 15.141,20.125 14.651,20.125L13.467,20.125C12.977,20.125 12.579,20.523 12.579,21.013L12.579,30.197C12.579,30.687 12.977,31.085 13.467,31.085L14.651,31.085C15.141,31.085 15.539,30.687 15.539,30.197L15.539,21.013Z', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.976369,-0.216111,0.0953319,0.430701,9.07311,20.5256)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M15.539,21.013C15.539,20.523 15.141,20.125 14.651,20.125L13.467,20.125C12.977,20.125 12.579,20.523 12.579,21.013L12.579,30.197C12.579,30.687 12.977,31.085 13.467,31.085L14.651,31.085C15.141,31.085 15.539,30.687 15.539,30.197L15.539,21.013Z', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.976369,-0.216111,0.216111,0.976369,9.35867,3.58775)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M15.539,21.013C15.539,20.523 15.141,20.125 14.651,20.125L13.467,20.125C12.977,20.125 12.579,20.523 12.579,21.013L12.579,30.197C12.579,30.687 12.977,31.085 13.467,31.085L14.651,31.085C15.141,31.085 15.539,30.687 15.539,30.197L15.539,21.013Z', style: { fill: "rgb(56,170,86)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.976369,-0.216111,0.135529,0.612306,19.3036,14.8929)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M15.539,21.013C15.539,20.523 15.141,20.125 14.651,20.125L13.467,20.125C12.977,20.125 12.579,20.523 12.579,21.013L12.579,30.197C12.579,30.687 12.977,31.085 13.467,31.085L14.651,31.085C15.141,31.085 15.539,30.687 15.539,30.197L15.539,21.013Z', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.976369,-0.216111,0.311388,1.40682,10.237,-9.78672)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M15.539,21.013C15.539,20.523 15.141,20.125 14.651,20.125L13.467,20.125C12.977,20.125 12.579,20.523 12.579,21.013L12.579,30.197C12.579,30.687 12.977,31.085 13.467,31.085L14.651,31.085C15.141,31.085 15.539,30.687 15.539,30.197L15.539,21.013Z', style: { fill: "rgb(56,170,86)" } })
            ),
            React__default.createElement(reactNativeSvg.Path, { d: 'M38.224,38.192C38.139,38.567 37.997,38.927 37.799,39.257C37.412,39.899 36.825,40.412 36.137,40.709C35.824,40.844 35.492,40.934 35.153,40.974C34.748,41.023 34.337,41.001 33.939,40.912L26.42,39.213L38.622,36.43L38.224,38.192ZM6.083,26.295L7.995,35.052L7.795,35.007C6.166,34.639 5,33.177 5,31.505C5,31.239 5.03,30.973 5.088,30.714L6.083,26.295ZM39.907,12.928L40.198,12.993C41.83,13.358 43,14.822 43,16.497C43,16.763 42.971,17.027 42.912,17.286L41.87,21.916L39.907,12.928ZM9.796,9.808C9.88,9.433 10.023,9.073 10.221,8.743C10.607,8.101 11.195,7.588 11.883,7.291C12.196,7.156 12.528,7.066 12.867,7.026C13.272,6.977 13.683,6.999 14.081,7.088L21.747,8.823L9.381,11.645L9.796,9.808Z', style: { fill: "rgb(90,130,194)" } })
        )
    );
};

var Expenses = function Expenses() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Expenses', transform: 'matrix(0.47499,0,0,0.47499,-457.679,-101.89)' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1.26067,0,0,1.26067,952.304,206.937)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M31.488,34.641L64.991,23.53L58.37,14.338L36.596,30.007L29.647,35.007L30.39,35.007L31.488,34.641Z', style: { fill: "rgb(56,170,86)", fillRule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1.26067,0,0,1.26067,944.054,205.937)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M76.837,35.007L75.89,32.17L73.8,25.869L73.019,26.13L46.261,35.007L76.837,35.007Z', style: { fill: "rgb(233,74,60)", fillRule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,964.083,215.062)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M82.481,35.007C83.868,35.007 84.981,36.13 84.981,37.507L84.981,49.419L87.764,48.032L89.981,46.919L89.981,33.508C89.981,31.579 88.418,30.007 86.485,30.007L80.44,30.007L82.1,35.007L82.481,35.007Z', style: { fill: "rgb(246,187,26)", fillRule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,964.083,215.062)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M84.981,85L86.485,85C88.419,85 89.981,83.428 89.981,81.494L89.981,73.086L84.981,75.586L84.981,85Z', style: { fill: "rgb(246,187,26)", fillRule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,964.083,215.062)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M79.981,57.5L74.981,57.5C70.84,57.5 67.491,60.864 67.491,65C67.491,69.141 70.841,72.5 74.981,72.5L79.981,72.5L89.981,67.5L90.001,52.5L79.981,57.5ZM74.981,67.5C73.604,67.5 72.481,66.377 72.481,65C72.481,63.623 73.604,62.5 74.981,62.5C76.368,62.5 77.481,63.623 77.481,65C77.481,66.377 76.368,67.5 74.981,67.5Z', style: { fill: "rgb(90,130,194)", fillRule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,83.7583,0)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M942.816,305.062L897.824,305.062C893.678,305.062 890.324,301.703 890.324,297.562L890.324,252.569C890.324,248.431 893.678,245.069 897.824,245.069L908.361,245.069L903.327,248.692L901.418,250.069L897.824,250.069C896.442,250.069 895.324,251.192 895.324,252.569C895.324,253.736 896.12,254.698 897.194,254.976L956.81,254.976C958.743,254.976 960.306,256.546 960.306,258.477L960.306,266.971L959.134,267.562L955.306,267.562C948.421,267.562 942.816,273.172 942.816,280.062C942.816,286.957 948.422,292.562 955.306,292.562L960.306,292.562L960.306,301.468C960.306,303.401 958.744,304.964 956.81,304.964L943.91,304.964C943.548,305.023 943.187,305.062 942.816,305.062ZM930.18,261.547L906.055,261.547C900.846,261.547 896.618,265.776 896.618,270.984L896.618,289.859C896.618,295.068 900.847,299.297 906.055,299.297L930.18,299.297C935.389,299.297 939.618,295.068 939.618,289.859L939.618,270.984C939.618,265.776 935.389,261.547 930.18,261.547Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(2.10531,0,0,2.10531,963.556,214.51)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M23.108,23.54C25.264,23.54 27.014,25.291 27.014,27.446L27.014,35.259C27.014,37.415 25.264,39.165 23.108,39.165L12.92,39.165C10.764,39.165 9.014,37.415 9.014,35.259L9.014,27.446C9.014,25.291 10.764,23.54 12.92,23.54L23.108,23.54ZM24.634,28.517L11.394,28.517C11.115,28.517 10.889,28.743 10.889,29.021L10.889,30.031C10.889,30.31 11.115,30.536 11.394,30.536L24.634,30.536C24.913,30.536 25.139,30.31 25.139,30.031L25.139,29.021C25.139,28.743 24.913,28.517 24.634,28.517Z', style: { fill: "rgb(90,130,194)" } })
            )
        )
    );
};

var Location = function Location() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Location', transform: 'matrix(0.433646,0,0,0.430871,-411.976,-91.8688)' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1.00778,975.91,217.858)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M29.465,0C17.397,0 7.616,9.782 7.616,21.85C7.616,33.917 29.465,59.877 29.465,59.877C29.465,59.877 51.316,33.918 51.316,21.85C51.315,9.782 41.532,0 29.465,0ZM29.465,31.716C24.017,31.716 19.598,27.299 19.598,21.85C19.598,16.401 24.017,11.983 29.465,11.983C34.915,11.983 39.332,16.4 39.332,21.85C39.332,27.3 34.915,31.716 29.465,31.716Z', style: { fill: "rgb(246,187,26)", fillRule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1.25219,0,0,1.24219,-142.194,-77.7182)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M903.506,294.772L904.922,320.156L887.027,315.02L893.09,290.262L903.506,294.772Z', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1.25219,0,0,1.24219,-142.194,-77.7182)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M927.122,290.455L926.596,315.33L905.782,320.005L906.515,295.08L927.122,290.455Z', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1.25219,0,0,1.24219,-142.194,-77.7182)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M928.433,290.419L939.893,294.388L945.958,319.147L929.582,315.387L928.433,290.419Z', style: { fill: "rgb(56,170,86)" } })
            )
        )
    );
};

var Notes = function Notes() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Notes' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.568147,0,0,0.568147,1.69494,17.4077)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,8.981C45.017,7.25 43.612,5.845 41.881,5.845L8.953,5.845C7.222,5.845 5.817,7.25 5.817,8.981L5.817,41.909C5.817,43.64 7.222,45.045 8.953,45.045L41.881,45.045C43.612,45.045 45.017,43.64 45.017,41.909L45.017,8.981Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.459184,0,0,0.459184,18.0574,2.31596)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,8.981C45.017,7.25 43.612,5.845 41.881,5.845L8.953,5.845C7.222,5.845 5.817,7.25 5.817,8.981L5.817,41.909C5.817,43.64 7.222,45.045 8.953,45.045L41.881,45.045C43.612,45.045 45.017,43.64 45.017,41.909L45.017,8.981Z', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.35883,0,0,0.568147,26.8465,12.4077)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,7.826C45.017,6.733 43.612,5.845 41.881,5.845L8.953,5.845C7.222,5.845 5.817,6.733 5.817,7.826L5.817,43.065C5.817,44.158 7.222,45.045 8.953,45.045L41.881,45.045C43.612,45.045 45.017,44.158 45.017,43.065L45.017,7.826Z', style: { fill: "rgb(56,170,86)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.226629,0,0,0.419075,7.79777,9.55041)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,7.541C45.017,6.605 43.612,5.845 41.881,5.845L8.953,5.845C7.222,5.845 5.817,6.605 5.817,7.541L5.817,43.349C5.817,44.285 7.222,45.045 8.953,45.045L41.881,45.045C43.612,45.045 45.017,44.285 45.017,43.349L45.017,7.541Z', style: { fill: "rgb(233,74,60)" } })
            )
        )
    );
};

var Planning = function Planning() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Planning' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.38,0,0,0.384693,5,4.76534)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M93.49,12.76L80.08,12.76L80.08,5.82C80.08,2.962 77.728,0.61 74.87,0.61L66.8,0.61C63.942,0.61 61.59,2.962 61.59,5.82L61.59,12.76L38.41,12.76L38.41,5.82C38.41,2.962 36.058,0.61 33.2,0.61L25.13,0.61C22.272,0.61 19.92,2.962 19.92,5.82L19.92,12.76L6.51,12.76C2.943,12.771 0.011,15.703 0,19.27L0,92.88C0.011,96.447 2.943,99.379 6.51,99.39L93.51,99.39C97.07,99.368 99.989,96.44 100,92.88L100,19.27C99.989,15.703 97.057,12.771 93.49,12.76ZM67.71,6.21L74,6.21L74,22.21L67.71,22.21L67.71,6.21ZM26,6.21L32.25,6.21L32.25,22.21L26,22.21L26,6.21ZM92.27,92.21L7.69,92.21L7.69,31.34L92.31,31.34L92.27,92.21Z', style: { fill: "rgb(246,187,26)", fillRule: "nonzero" } })
            ),
            React__default.createElement(reactNativeSvg.Path, { d: 'M38.92,17.445L38.92,24.405L9.08,24.405L9.08,17.445L38.92,17.445ZM30.893,19.723L9.993,19.723L9.993,22.127L30.893,22.127L30.893,23.924L36.019,20.923L30.893,17.927L30.893,19.723Z', style: { fill: "rgb(56,170,86)" } }),
            React__default.createElement(reactNativeSvg.Path, { d: 'M38.92,24.765L38.92,31.725L9.08,31.725L9.08,24.765L38.92,24.765ZM22.879,27.045L9.993,27.045L9.993,29.449L22.879,29.449L22.879,31.242L28.005,28.245L22.879,25.248L22.879,27.045Z', style: { fill: "rgb(233,74,60)" } }),
            React__default.createElement(reactNativeSvg.Path, { d: 'M38.92,32.085L38.92,39.045L9.08,39.045L9.08,32.085L38.92,32.085ZM15.059,34.361L9.993,34.361L9.993,36.765L15.059,36.765L15.059,38.562L20.189,35.565L15.059,32.568L15.059,34.361Z', style: { fill: "rgb(90,130,194)" } })
        )
    );
};

var PO = function PO() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Purchase', transform: 'matrix(0.418822,0,0,0.418822,-342.638,-177.297)' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,824.038,-517.889)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M8,964.362C6.896,964.362 6,965.258 6,966.362C6,967.467 6.896,968.362 8,968.362L20.656,968.362L24.156,977.081L35.844,1006.33L31.156,1017.58C30.643,1018.79 31.684,1020.36 33,1020.36L83,1020.36C84.105,1020.36 85,1019.47 85,1018.36C85,1017.26 84.105,1016.36 83,1016.36L36,1016.36L39.844,1007.11C40.036,1006.64 40.036,1006.09 39.844,1005.61L27.844,975.612L23.844,965.612C23.548,964.882 22.788,964.366 22,964.362L8,964.362Z', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1.01599,0,0,1.01599,825.265,-533.735)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M31,976.362L43,1005.36L88,1002.36L94,976.362L31,976.362Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(-0.734194,6.20616e-17,6.20616e-17,-0.227422,934.091,718.082)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M37.124,976.362L48.636,1008.17L88.172,1001.93L91.768,976.362L37.124,976.362Z', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1.37261,0,0,1.37261,802.427,-905.534)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M43,1026.36C39.134,1026.36 36,1029.5 36,1033.36C36,1037.23 39.134,1040.36 43,1040.36C46.866,1040.36 50,1037.23 50,1033.36C50,1029.5 46.866,1026.36 43,1026.36Z', style: { fill: "rgb(56,170,86)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1.37261,0,0,1.37261,802.427,-905.534)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M73,1026.36C69.134,1026.36 66,1029.5 66,1033.36C66,1037.23 69.134,1040.36 73,1040.36C76.866,1040.36 80,1037.23 80,1033.36C80,1029.5 76.866,1026.36 73,1026.36Z', style: { fill: "rgb(56,170,86)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.855242,0.518229,-0.518229,0.855242,837.798,404.974)' },
                React__default.createElement(reactNativeSvg.Rect, { x: '56.726', y: '4.167', width: '9.42', height: '14.312', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.855242,0.518229,-0.90786,1.49826,856.706,396.1)' },
                React__default.createElement(reactNativeSvg.Rect, { x: '56.726', y: '4.167', width: '9.42', height: '14.312', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.476447,0.2887,-0.682615,1.12653,888.109,416.023)' },
                React__default.createElement(reactNativeSvg.Rect, { x: '56.726', y: '4.167', width: '9.42', height: '14.312', style: { fill: "rgb(233,74,60)" } })
            )
        )
    );
};

var Proposal = function Proposal() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Oppurtunity', transform: 'matrix(0.398603,0,0,0.398603,-324.394,-166.176)' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1.23094,0,0,1.23094,-290.56,-248.995)' },
                React__default.createElement(
                    reactNativeSvg.G,
                    { transform: 'matrix(1.12145,0,0,1.12145,890.191,533.194)' },
                    React__default.createElement(reactNativeSvg.Path, { d: 'M54.7,51.9L54.7,51.7C57.8,51.6 61.3,51.3 64.5,50.8L64.5,60C64.5,61.7 63.1,63 61.5,63L38.6,63C36.9,63 35.6,61.6 35.6,60L35.6,50.8C38.9,51.3 42.4,51.5 45.5,51.7L45.5,51.9C45.5,53.7 47,55.2 48.8,55.2L51.3,55.2C53.107,55.158 54.545,53.73 54.6,51.9L54.7,51.9Z', style: { fill: "rgb(246,187,26)" } })
                ),
                React__default.createElement(
                    reactNativeSvg.G,
                    { transform: 'matrix(1.12145,0,0,1.12145,-101.187,-54.1792)' },
                    React__default.createElement(reactNativeSvg.Path, { d: 'M932.614,569.862C930.814,569.862 929.314,571.362 929.314,573.162C924.714,573.062 920.914,572.562 918.014,571.962C917.614,571.862 917.314,571.462 917.314,571.062L917.314,566.462C917.314,564.794 918.662,563.511 920.314,563.462L926.914,563.462L926.914,561.262C926.914,558.896 928.858,557.015 931.214,556.962L936.714,556.962C939.154,557.004 941.014,558.986 941.014,561.262L941.014,563.462L947.614,563.462C949.214,563.462 950.614,564.762 950.414,566.362L950.414,570.962C950.414,571.462 950.114,571.762 949.714,571.862C946.814,572.462 943.014,572.962 938.414,573.162C938.414,571.362 936.914,569.862 935.114,569.862L932.614,569.862ZM936.714,560.362L931.214,560.362C930.714,560.362 930.314,560.762 930.314,561.262L930.314,563.462L937.614,563.462L937.614,561.262C937.614,560.762 937.214,560.362 936.714,560.362Z', style: { fill: "rgb(246,187,26)" } })
                ),
                React__default.createElement(
                    reactNativeSvg.G,
                    { transform: 'matrix(1.12145,0,0,1.12145,890.191,533.194)' },
                    React__default.createElement(reactNativeSvg.Path, { d: 'M51.3,48.4C51.946,48.459 52.3,48.93 52.3,49.4L52.3,51.9C52.3,52.5 51.8,52.9 51.3,52.9L48.8,52.9C48.2,52.9 47.8,52.4 47.8,51.9L47.8,49.4C47.8,48.836 48.242,48.448 48.8,48.4L51.3,48.4Z', style: { fill: "rgb(246,187,26)" } })
                )
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1.23094,0,0,1.23094,-286.478,-243.943)' },
                React__default.createElement(
                    reactNativeSvg.G,
                    { transform: 'matrix(0.913429,0,0,0.913429,897.118,540.1)' },
                    React__default.createElement(reactNativeSvg.Path, { d: 'M27.5,24.5C28,23.5 28.3,22.5 28.3,21.3C28.3,17.5 25.2,14.3 21.3,14.3C17.4,14.3 14.3,17.4 14.3,21.3C14.3,25.2 17.4,28.3 21.3,28.3C22.4,28.3 23.5,28 24.5,27.5L29.5,32.5C29.9,32.9 30.5,33.1 31,33.1C31.5,33.1 32.1,32.9 32.5,32.5C33.3,31.7 33.3,30.3 32.5,29.5L27.5,24.5Z', style: { fill: "rgb(90,130,194)" } })
                ),
                React__default.createElement(
                    reactNativeSvg.G,
                    { transform: 'matrix(0.913429,0,0,0.913429,895.759,540.1)' },
                    React__default.createElement(reactNativeSvg.Path, { d: 'M23.2,52.1C24.4,52.1 25.3,51.1 25.3,50C25.3,48.8 24.3,47.9 23.2,47.9L16,47.9C15.1,45.1 12.5,43.1 9.4,43.1C5.6,43.1 2.4,46.2 2.4,50.1C2.4,54 5.5,57.1 9.4,57.1C12.5,57.1 15.1,55.1 16,52.3L23.2,52.3L23.2,52.1Z', style: { fill: "rgb(233,74,60)" } })
                ),
                React__default.createElement(
                    reactNativeSvg.G,
                    { transform: 'matrix(0.913429,0,0,0.913429,897.118,540.1)' },
                    React__default.createElement(reactNativeSvg.Path, { d: 'M29.5,67.5L24.5,72.5C23.5,72 22.5,71.7 21.3,71.7C17.5,71.7 14.3,74.8 14.3,78.7C14.3,82.5 17.4,85.7 21.3,85.7C25.2,85.7 28.3,82.6 28.3,78.7C28.3,77.6 28,76.5 27.5,75.5L32.5,70.5C33.3,69.7 33.3,68.3 32.5,67.5C31.7,66.6 30.3,66.6 29.5,67.5Z', style: { fill: "rgb(56,170,86)" } })
                ),
                React__default.createElement(
                    reactNativeSvg.G,
                    { transform: 'matrix(0.913429,0,0,0.913429,897.118,540.1)' },
                    React__default.createElement(reactNativeSvg.Path, { d: 'M69,33.1C69.5,33.1 70.1,32.9 70.5,32.5L75.5,27.5C76.5,28 77.5,28.3 78.7,28.3C82.5,28.3 85.7,25.2 85.7,21.3C85.7,17.4 82.6,14.3 78.7,14.3C74.9,14.3 71.7,17.4 71.7,21.3C71.7,22.4 72,23.5 72.5,24.5L67.5,29.5C66.7,30.3 66.7,31.7 67.5,32.5C67.9,32.9 68.4,33.1 69,33.1Z', style: { fill: "rgb(56,170,86)" } })
                ),
                React__default.createElement(
                    reactNativeSvg.G,
                    { transform: 'matrix(0.913429,0,0,0.913429,897.118,540.1)' },
                    React__default.createElement(reactNativeSvg.Path, { d: 'M78.7,71.7C77.6,71.7 76.5,72 75.5,72.5L70.5,67.5C69.7,66.7 68.3,66.7 67.5,67.5C66.7,68.3 66.7,69.7 67.5,70.5L72.5,75.5C72,76.5 71.7,77.5 71.7,78.7C71.7,82.5 74.8,85.7 78.7,85.7C82.5,85.7 85.7,82.6 85.7,78.7C85.6,74.8 82.5,71.7 78.7,71.7Z', style: { fill: "rgb(90,130,194)" } })
                ),
                React__default.createElement(
                    reactNativeSvg.G,
                    { transform: 'matrix(0.913429,0,0,0.913429,898.477,540.1)' },
                    React__default.createElement(reactNativeSvg.Path, { d: 'M90.5,43C87.4,43 84.8,45 83.9,47.8L76.8,47.8C75.6,47.8 74.7,48.8 74.7,49.9C74.7,51.1 75.7,52 76.8,52L84,52C84.9,54.8 87.5,56.8 90.6,56.8C94.4,56.8 97.6,53.7 97.6,49.8C97.6,45.9 94.4,43 90.5,43Z', style: { fill: "rgb(233,74,60)" } })
                )
            )
        )
    );
};

var Publishing = function Publishing() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { transform: 'matrix(0.89468,0,0,0.89468,2.25948,4.84473)' },
            React__default.createElement(
                reactNativeSvg.G,
                { id: 'Publishing' },
                React__default.createElement(
                    reactNativeSvg.G,
                    null,
                    React__default.createElement(
                        reactNativeSvg.G,
                        null,
                        React__default.createElement(
                            reactNativeSvg.G,
                            { transform: 'matrix(1.11772,0,0,1.11772,-4.76089,-5.41504)' },
                            React__default.createElement(reactNativeSvg.Path, { d: 'M28.638,39.493L31.891,39.493C33.676,39.493 35.145,40.962 35.145,42.747C35.145,44.531 33.676,46 31.891,46L17.251,46C15.467,45.998 14,44.531 13.998,42.747L13.998,39.751L14.023,39.724L16.136,40.993C15.854,43.037 17.451,44.86 19.503,44.86C21.377,44.86 22.902,43.335 22.902,41.461C22.902,39.584 21.38,38.062 19.503,38.062C18.678,38.062 17.922,38.357 17.332,38.849L15.111,37.514C15.221,36.833 15.165,36.127 14.944,35.473L16.271,34.437C17.122,35.218 18.256,35.696 19.503,35.696C22.142,35.696 24.281,33.556 24.281,30.917C24.281,28.278 22.142,26.138 19.503,26.138C16.864,26.138 14.724,28.278 14.724,30.917C14.724,31.42 14.802,31.904 14.946,32.36L13.998,33.1L13.998,25.396L28.638,25.396L28.638,39.493Z', style: { fill: "rgb(246,187,26)" } })
                        ),
                        React__default.createElement(
                            reactNativeSvg.G,
                            { transform: 'matrix(1,0,0,1,0,-9.1796)' },
                            React__default.createElement(
                                reactNativeSvg.G,
                                { transform: 'matrix(1.11772,0,0,1.11772,-4.76089,-5.41504)' },
                                React__default.createElement(reactNativeSvg.Path, { d: 'M28.638,25.204L13.998,25.204L13.998,16.72C14,14.936 15.467,13.468 17.251,13.466L27.825,13.466C28.271,13.466 28.638,13.833 28.638,14.279L28.638,18.346L19.691,18.346L19.117,18.586C18.826,19.284 18.863,18.904 19.117,19.734L19.691,19.973L28.638,19.973L28.638,21.6L19.691,21.6L19.117,21.839C18.826,22.538 18.863,22.157 19.117,22.987L19.691,23.226L28.638,23.226L28.638,25.204Z', style: { fill: "rgb(246,187,26)" } })
                            ),
                            React__default.createElement(
                                reactNativeSvg.G,
                                { transform: 'matrix(1.11772,0,0,1.11772,-4.76089,-5.41504)' },
                                React__default.createElement(reactNativeSvg.Path, { d: 'M35.145,25.204L30.264,25.204L30.264,11.026L30.264,11.023C30.265,10.989 30.267,10.954 30.271,10.92C30.279,10.862 30.293,10.805 30.313,10.75C30.34,10.678 30.376,10.61 30.421,10.548C30.457,10.499 30.499,10.454 30.545,10.414C30.628,10.341 30.725,10.286 30.83,10.252C30.91,10.226 30.993,10.213 31.077,10.213C31.349,10.213 31.62,10.213 31.891,10.213C31.962,10.213 32.033,10.215 32.104,10.22C32.275,10.232 32.445,10.257 32.612,10.295C32.886,10.359 33.152,10.458 33.401,10.59C33.592,10.692 33.772,10.812 33.939,10.948C34.107,11.086 34.262,11.239 34.4,11.407C34.529,11.563 34.643,11.731 34.741,11.909C34.839,12.085 34.92,12.27 34.983,12.461C35.046,12.654 35.092,12.853 35.118,13.054C35.135,13.191 35.144,13.329 35.145,13.466L35.145,25.204Z', style: { fill: "rgb(56,170,86)" } })
                            )
                        ),
                        React__default.createElement(
                            reactNativeSvg.G,
                            { transform: 'matrix(1.11772,0,0,1.11772,-4.76089,-5.41504)' },
                            React__default.createElement(reactNativeSvg.Path, { d: 'M35.145,39.136C35.086,39.082 35.025,39.03 34.964,38.979C34.845,38.88 34.722,38.788 34.594,38.701C34.297,38.5 33.977,38.331 33.643,38.2C33.308,38.069 32.959,37.976 32.604,37.922C32.449,37.898 32.294,37.882 32.137,37.874C32.058,37.869 31.978,37.867 31.898,37.867L31.891,37.867L30.264,37.867L30.264,25.498L35.145,25.498L35.145,39.136Z', style: { fill: "rgb(56,170,86)" } })
                        ),
                        React__default.createElement(
                            reactNativeSvg.G,
                            { transform: 'matrix(1.11772,0,0,1.11772,-4.76089,-5.41504)' },
                            React__default.createElement(reactNativeSvg.Path, { d: 'M36.771,16.939L36.771,5.253C37.585,5.253 38.398,5.253 39.212,5.253C39.292,5.253 39.371,5.275 39.448,5.316C39.52,5.356 39.589,5.413 39.653,5.487C39.73,5.576 39.798,5.689 39.855,5.818C39.909,5.942 39.951,6.08 39.98,6.228C39.998,6.322 40.011,6.42 40.018,6.519C40.022,6.576 40.024,6.634 40.025,6.692L40.025,6.698L40.025,45.187L40.025,45.19C40.024,45.222 40.022,45.255 40.018,45.288C40.011,45.343 39.998,45.398 39.98,45.451C39.951,45.534 39.909,45.612 39.855,45.682C39.798,45.755 39.73,45.818 39.653,45.869C39.589,45.91 39.52,45.942 39.448,45.965C39.371,45.988 39.292,46 39.212,46C37.975,46 36.739,46.002 35.502,46C35.5,46 35.505,45.997 35.507,45.995C35.51,45.991 35.513,45.988 35.516,45.985C35.525,45.974 35.535,45.964 35.544,45.953C35.573,45.92 35.602,45.887 35.63,45.853C35.714,45.755 35.793,45.652 35.868,45.547C36.093,45.232 36.279,44.889 36.423,44.529C36.57,44.161 36.671,43.775 36.724,43.382C36.742,43.249 36.754,43.116 36.761,42.982C36.763,42.938 36.765,42.894 36.766,42.85L36.767,42.794C36.767,42.792 36.765,42.789 36.767,42.788C36.769,42.786 36.77,42.79 36.771,42.791L36.771,25.592L13.998,25.592L13.998,16.939L36.771,16.939Z', style: { fill: "rgb(233,74,60)" } })
                        ),
                        React__default.createElement(reactNativeSvg.Path, { d: 'M13.323,30.466C13.171,30.049 13.088,29.599 13.088,29.129C13.088,26.966 14.845,25.209 17.008,25.209C19.172,25.209 20.928,26.966 20.928,29.129C20.928,31.293 19.172,33.049 17.008,33.049C15.806,33.049 14.729,32.506 14.009,31.652L10.4,34.393C10.585,34.8 10.688,35.253 10.688,35.729C10.688,35.962 10.664,36.189 10.617,36.408L15.261,39.137C15.722,38.687 16.353,38.409 17.048,38.409C18.461,38.409 19.608,39.556 19.608,40.969C19.608,42.382 18.461,43.529 17.048,43.529C15.635,43.529 14.488,42.382 14.488,40.969C14.488,40.742 14.518,40.521 14.574,40.311L10.054,37.654C9.464,38.452 8.516,38.969 7.448,38.969C5.66,38.969 4.208,37.517 4.208,35.729C4.208,33.941 5.66,32.489 7.448,32.489C8.27,32.489 9.02,32.795 9.591,33.3L13.323,30.466Z', style: { fill: "rgb(90,130,194)" } })
                    )
                )
            )
        )
    );
};

var Questions = function Questions() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Questions' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.811304,0,0,0.811304,-0.418429,-0.961944)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M20.786,34.395C23.137,36.041 24.752,39.436 24.752,43.354C24.752,48.882 10.407,48.882 10.407,43.354C10.407,39.643 11.855,36.401 14.005,34.671C14.744,35.845 15.952,36.61 17.316,36.61C18.783,36.61 20.07,35.724 20.786,34.395ZM17.343,28.475C19.108,28.475 20.541,29.908 20.541,31.673C20.541,33.438 19.108,35.291 17.343,35.291C15.578,35.291 14.145,33.438 14.145,31.673C14.145,29.908 15.578,28.475 17.343,28.475Z', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.811304,0,0,0.811304,9.73797,7.463)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M20.786,34.395C23.137,36.041 24.752,39.436 24.752,43.354C24.752,48.882 10.407,48.882 10.407,43.354C10.407,39.643 11.855,36.401 14.005,34.671C14.744,35.845 15.952,36.61 17.316,36.61C18.783,36.61 20.07,35.724 20.786,34.395ZM17.343,28.475C19.108,28.475 20.541,29.908 20.541,31.673C20.541,33.438 19.108,35.291 17.343,35.291C15.578,35.291 14.145,33.438 14.145,31.673C14.145,29.908 15.578,28.475 17.343,28.475Z', style: { fill: "rgb(56,170,86)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.811304,0,0,0.811304,19.8944,-0.961944)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M20.786,34.395C23.137,36.041 24.752,39.436 24.752,43.354C24.752,48.882 10.407,48.882 10.407,43.354C10.407,39.643 11.855,36.401 14.005,34.671C14.744,35.845 15.952,36.61 17.316,36.61C18.783,36.61 20.07,35.724 20.786,34.395ZM17.343,28.475C19.108,28.475 20.541,29.908 20.541,31.673C20.541,33.438 19.108,35.291 17.343,35.291C15.578,35.291 14.145,33.438 14.145,31.673C14.145,29.908 15.578,28.475 17.343,28.475Z', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,0,-4)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M24,6C30.062,6 34.983,10.921 34.983,16.983C34.983,21.846 31.816,25.975 27.433,27.418C26.353,27.773 24,30.451 24,30.451C24,30.451 21.743,27.789 20.701,27.461C16.249,26.059 13.017,21.895 13.017,16.983C13.017,10.921 17.938,6 24,6ZM25.51,25.939L25.51,23.012L22.583,23.012L22.583,25.939L25.51,25.939ZM25.24,22.002C25.226,21.196 25.293,20.637 25.443,20.325C25.592,20.012 25.976,19.599 26.594,19.085C27.788,18.092 28.568,17.307 28.932,16.731C29.297,16.154 29.479,15.543 29.479,14.897C29.479,13.731 28.983,12.708 27.99,11.83C26.997,10.951 25.66,10.512 23.979,10.512C22.382,10.512 21.092,10.946 20.109,11.814C19.127,12.682 18.597,13.738 18.521,14.981L21.208,15.314C21.396,14.446 21.74,13.8 22.24,13.377C22.74,12.953 23.361,12.741 24.104,12.741C24.875,12.741 25.488,12.944 25.943,13.351C26.398,13.757 26.625,14.245 26.625,14.814C26.625,15.224 26.497,15.599 26.24,15.939C26.073,16.154 25.562,16.609 24.708,17.304C23.854,17.998 23.285,18.623 23,19.179C22.715,19.734 22.573,20.443 22.573,21.304C22.573,21.387 22.576,21.62 22.583,22.002L25.24,22.002Z', style: { fill: "rgb(246,187,26)" } })
            )
        )
    );
};

var Remainder = function Remainder() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Reminder', transform: 'matrix(1,0,0,1,0.0417542,3.5)' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.966938,0,0,0.966938,-2.29761,-1.44101)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M27.197,10.798C35.759,10.798 42.71,17.749 42.71,26.311C42.71,34.873 35.759,41.824 27.197,41.824C18.635,41.824 11.684,34.873 11.684,26.311C11.684,17.749 18.635,10.798 27.197,10.798ZM27.197,16.185C32.785,16.185 37.322,20.723 37.322,26.311C37.322,31.899 32.785,36.436 27.197,36.436C21.608,36.436 17.071,31.899 17.071,26.311C17.071,20.723 21.608,16.185 27.197,16.185Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.707107,0.707107,-0.707107,0.707107,35.2174,-13.4541)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M25.692,19.779C25.692,15.76 22.434,12.502 18.415,12.502C14.396,12.502 11.138,15.76 11.138,19.779L25.692,19.779Z', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(-0.707107,0.707107,0.707107,0.707107,12.6991,-13.4541)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M25.692,19.779C25.692,15.76 22.434,12.502 18.415,12.502C14.396,12.502 11.138,15.76 11.138,19.779L25.692,19.779Z', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.972241,0,0,1,0.985569,-1.81829)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M26.757,5.318C26.757,4.49 26.066,3.818 25.214,3.818L22.129,3.818C21.277,3.818 20.586,4.49 20.586,5.318L20.586,10.346C20.586,11.174 21.277,11.846 22.129,11.846L25.214,11.846C26.066,11.846 26.757,11.174 26.757,10.346L26.757,5.318Z', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(reactNativeSvg.Path, { d: 'M22.835,26.637C22.248,26.433 21.826,25.875 21.826,25.219L21.826,18.219C21.826,17.391 22.498,16.719 23.326,16.719C24.154,16.719 24.826,17.391 24.826,18.219L24.826,24.117L26.902,24.673C27.702,24.888 28.177,25.711 27.963,26.51C27.749,27.31 26.925,27.785 26.126,27.571L23.198,26.786C23.068,26.752 22.946,26.701 22.835,26.637Z', style: { fill: "rgb(56,170,86)" } })
        )
    );
};

var Sales = function Sales() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Sales' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.408266,0,0,0.408266,4.75525,1.4605)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M56.8,28.4L56.4,28.3L56.4,28.1L56.8,28.4Z', style: 'fill-rule:nonzero;' })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.43379,0,0,0.43379,2.3105,0.748744)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M86.2,77.3L13.8,77.3C9.6,77.3 6.2,73.9 6.2,69.7L6.2,30.7C6.2,26.5 9.6,23.1 13.8,23.1L86.2,23.1C90.4,23.2 93.8,26.6 93.8,30.7L93.8,69.7C93.8,73.9 90.4,77.3 86.2,77.3ZM77.9,29.5L21.6,29.5C21.7,30 21.7,30.4 21.7,30.9C21.7,35.1 18.3,38.6 14,38.6C13.5,38.6 13.1,38.6 12.7,38.5L12.7,61.8C13.1,61.7 13.6,61.7 14,61.7C18.2,61.7 21.7,65.1 21.7,69.4C21.7,69.9 21.7,70.4 21.6,70.8L77.8,70.8C77.8,70.5 77.7,70.2 77.7,69.8C77.7,65.6 81.1,62.1 85.4,62.1C86.1,62.1 86.7,62.2 87.3,62.3L87.3,38.9C86.7,39.1 86.1,39.1 85.4,39.1C81.2,39.1 77.7,35.7 77.7,31.4C77.7,30.8 77.8,30.1 77.9,29.5Z', style: { fill: "rgb(56,170,86)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.396143,0,0,0.396143,3.74391,2.71291)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M43.7,17.5L56.9,4.3C59.9,1.3 64.7,1.3 67.6,4.3L80.9,17.6L43.7,17.6L43.7,17.5Z', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.396143,0,0,0.396143,3.74391,2.71291)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M49.2,5.1L30.2,5.1C26,5.1 22.6,8.5 22.6,12.7L22.6,17.5L36.8,17.5L49.2,5.1Z', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.396143,0,0,0.396143,3.74391,2.71291)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M51,95.3L69.4,95.3C73.4,95.3 76.7,92 76.7,88L76.7,83.1L63.3,83.1L51,95.3Z', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.396143,0,0,0.396143,3.74391,2.71291)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M31.7,95.8C34.6,98.7 39.2,98.7 42.1,95.8L54.9,83L18.9,83L31.7,95.8Z', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.396143,0,0,0.396143,3.74391,2.71291)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M74.2,45.7C71.7,45.7 69.6,47.8 69.6,50.3C69.6,52.8 71.7,54.9 74.2,54.9C76.7,54.9 78.8,52.8 78.8,50.3C78.8,47.8 76.7,45.7 74.2,45.7Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.396143,0,0,0.396143,3.74391,2.71291)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M25.8,45.7C23.3,45.7 21.2,47.8 21.2,50.3C21.2,52.8 23.3,54.9 25.8,54.9C28.3,54.9 30.4,52.8 30.4,50.3C30.4,47.8 28.4,45.7 25.8,45.7Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.489884,0,0,0.489884,-0.943127,-2.00233)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M61.1,50.3C61.1,44.2 56.1,39.2 50,39.2C43.9,39.2 38.9,44.2 38.9,50.3C38.9,56.4 43.9,61.4 50,61.4C56.1,61.5 61.1,56.5 61.1,50.3Z', style: { fill: "rgb(246,187,26)" } })
            )
        )
    );
};

var Tags = function Tags() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { transform: 'matrix(1,0,0,1.00321,1.77636e-14,-0.0873764)' },
            React__default.createElement(
                reactNativeSvg.G,
                { id: 'Tags' },
                React__default.createElement(
                    reactNativeSvg.G,
                    null,
                    React__default.createElement(
                        reactNativeSvg.G,
                        { transform: 'matrix(-0.458348,0,0,0.458348,45.2917,1.29005)' },
                        React__default.createElement(reactNativeSvg.Path, { d: 'M13.384,44.255L5.163,74.938C4.482,77.49 5.995,80.115 8.55,80.803L24.31,85.024L13.384,44.255Z', style: { fill: "rgb(56,170,86)", fillRule: "nonzero" } })
                    ),
                    React__default.createElement(
                        reactNativeSvg.G,
                        { transform: 'matrix(-0.458348,0,0,0.458348,46.2917,1.29005)' },
                        React__default.createElement(reactNativeSvg.Path, { d: 'M22.46,53.459L31.538,87.34C32.226,89.893 34.849,91.409 37.402,90.727L55.011,86.006L22.46,53.459Z', style: { fill: "rgb(90,130,194)", fillRule: "nonzero" } })
                    ),
                    React__default.createElement(
                        reactNativeSvg.G,
                        { transform: 'matrix(1.05325,0,0,1.05325,-0.266272,-2.02273)' },
                        React__default.createElement(reactNativeSvg.Path, { d: 'M33.548,6.735C35.037,6.735 36.245,7.943 36.245,9.432L36.245,21.032L19.887,37.39C19.492,37.785 18.974,37.982 18.457,37.982C17.94,37.982 17.423,37.785 17.028,37.39L5.592,25.953C4.803,25.163 4.803,23.885 5.592,23.095L21.95,6.737L33.548,6.735ZM23.14,29.359L32.867,19.632L32.867,10.113L23.349,10.114L13.553,19.91L23.14,29.359Z', style: { fill: "rgb(246,187,26)", fillRule: "nonzero" } })
                    ),
                    React__default.createElement(
                        reactNativeSvg.G,
                        { transform: 'matrix(-0.676992,0,0,0.676992,55.3343,-4.30677)' },
                        React__default.createElement(reactNativeSvg.Path, { d: 'M39.895,23.222C38.669,23.222 37.443,23.69 36.508,24.625C34.638,26.495 34.64,29.524 36.508,31.394C37.443,32.33 38.669,32.798 39.894,32.798C41.119,32.798 42.345,32.33 43.28,31.394C45.151,29.524 45.151,26.493 43.28,24.623C42.346,23.689 41.121,23.222 39.895,23.222Z', style: { fill: "rgb(233,74,60)", fillRule: "nonzero" } })
                    )
                )
            )
        )
    );
};

var Tickets = function Tickets() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { transform: 'matrix(0.408266,0,0,0.408266,4.75525,1.4605)' },
            React__default.createElement(reactNativeSvg.Path, { d: 'M56.8,28.4L56.4,28.3L56.4,28.1L56.8,28.4Z', style: 'fill-rule:nonzero;' })
        ),
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Ticket', transform: 'matrix(1.19674,0,0,1.21146,-5.40811,-3.02647)' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.280712,0,0,0.280712,12.6753,4.17187)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M30.2,26.4L30.8,24L26.8,22.9L26.1,25.3L30.2,26.4ZM42.8,29.9L43.4,27.5L39.4,26.4L38.7,28.8L42.8,29.9ZM56.8,22.9L34.1,56.6L32.7,58.8L32.6,58.8C28.5,57.7 24.4,60.2 23.2,64.2L22.9,65.4L12.4,62.5L27.9,5.8L38.4,8.7L38.1,9.9C37.6,11.9 37.8,14 38.8,15.7C39.8,17.5 41.5,18.8 43.5,19.3C45.5,19.8 47.5,19.6 49.3,18.6C51.1,17.6 52.4,15.9 52.9,14L53.2,12.8L63.7,15.7L60.9,26L56.8,22.9ZM37.2,25.8L33.2,24.7L32.5,27.1L36.5,28.2L37.2,25.8ZM45.9,28.2L45.2,30.6L49.2,31.7L49.9,29.3L45.9,28.2Z', style: { fill: "rgb(56,170,86)", fillRule: "nonzero" } })
            ),
            React__default.createElement(reactNativeSvg.Path, { d: 'M18.349,11.486L17.308,15.294L16.759,15.409L16.918,15.951L17.141,15.904L15.31,22.604L17.36,23.17C17.057,23.552 16.957,24.122 17.122,24.701L17.21,24.967L15.143,25.395L11.224,12.692L13.291,12.264L13.379,12.53C13.524,12.974 13.798,13.371 14.157,13.612C14.528,13.873 14.958,13.968 15.345,13.876C15.733,13.784 16.04,13.554 16.224,13.184C16.407,12.814 16.427,12.354 16.293,11.93L16.205,11.664L18.272,11.236L18.349,11.486ZM13.959,16.55L13.784,16.018L12.997,16.182L13.156,16.724L13.959,16.55ZM15.047,15.764L14.26,15.928L14.419,16.469L15.206,16.306L15.047,15.764ZM16.441,16.041L16.266,15.509L15.479,15.673L15.638,16.214L16.441,16.041Z', style: { fill: "rgb(233,74,60)", fillRule: "nonzero" } }),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1.07133,0,0,1.07133,-2.35035,-2.76871)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M36.873,38.818L17.455,37.63L17.669,34.035L18.099,34.054C18.767,34.087 19.434,33.855 19.941,33.41C20.447,32.965 20.764,32.325 20.797,31.656C20.831,30.988 20.599,30.321 20.154,29.815C19.709,29.309 19.068,28.992 18.4,28.958L17.999,28.923L18.212,25.328L33.916,26.295L37.63,26.516L37.581,27.422L37.542,28.017L37.515,28.299L37.388,30.128L37.019,30.15C36.351,30.116 35.684,30.348 35.178,30.793C34.672,31.238 34.355,31.879 34.321,32.547C34.287,33.215 34.503,33.853 34.964,34.388C35.409,34.894 36.05,35.211 36.718,35.245L37.12,35.28L36.873,38.818ZM30.568,37.346L31.4,37.4L31.497,36.047L30.664,35.993L30.568,37.346ZM25.25,35.715L25.25,34.439L22.699,34.439L22.699,35.715L25.25,35.715ZM30.69,35.178L31.522,35.231L31.618,33.879L30.786,33.825L30.69,35.178ZM28.271,33.164L28.271,31.888L22.699,31.888L22.699,33.164L28.271,33.164ZM30.856,33.021L31.688,33.075L31.785,31.722L30.953,31.669L30.856,33.021ZM30.978,30.853L31.81,30.907L31.906,29.554L31.074,29.5L30.978,30.853ZM28.271,30.68L28.271,29.404L22.699,29.404L22.699,30.68L28.271,30.68ZM31.931,28.738L32.028,27.385L31.196,27.332L31.099,28.685L31.931,28.738Z', style: { fill: "rgb(246,187,26)", fillRule: "nonzero" } })
            ),
            React__default.createElement(reactNativeSvg.Path, { d: 'M37.378,17.506L28.255,31.289L25.7,29.604L25.897,29.296C26.206,28.818 26.318,28.229 26.206,27.667C26.093,27.106 25.756,26.601 25.279,26.292C24.802,25.983 24.213,25.871 23.651,25.983C23.09,26.096 22.584,26.432 22.276,26.91L22.079,27.19L19.525,25.506L26.907,14.362L28.648,11.723L29.293,12.144L29.715,12.425L29.911,12.565L31.202,13.435L31.062,13.716C30.753,14.193 30.641,14.783 30.753,15.344C30.865,15.906 31.202,16.411 31.68,16.72C32.157,17.028 32.718,17.141 33.308,17.028C33.869,16.916 34.374,16.579 34.683,16.102L34.88,15.821L37.378,17.506ZM26.509,22.49C27.389,22.49 28.103,23.204 28.103,24.084C28.103,24.964 27.389,25.678 26.509,25.678C25.629,25.678 24.915,24.964 24.915,24.084C24.915,23.204 25.629,22.49 26.509,22.49ZM30.321,21.718L27.402,19.683L26.826,20.509L29.745,22.544L30.321,21.718ZM33.616,21.52L34.009,20.93L33.055,20.285L32.662,20.874L33.616,21.52ZM32.073,20.509L32.466,19.92L31.511,19.274L31.118,19.864L32.073,20.509ZM30.557,19.471L30.95,18.881L29.995,18.236L29.602,18.825L30.557,19.471ZM29.013,18.46L29.406,17.871L28.451,17.225L28.058,17.814L29.013,18.46ZM27.862,16.86L26.907,16.214L26.514,16.804L27.469,17.45L27.862,16.86Z', style: { fill: "rgb(90,130,194)" } })
        )
    );
};

var Todos = function Todos() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { transform: 'matrix(0.408266,0,0,0.408266,4.75525,1.4605)' },
            React__default.createElement(reactNativeSvg.Path, { d: 'M56.8,28.4L56.4,28.3L56.4,28.1L56.8,28.4Z', style: 'fill-rule:nonzero;' })
        ),
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Todos' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.612245,0,0,0.153061,15.4384,7.10532)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,13.685C45.017,9.358 44.139,5.845 43.057,5.845L7.777,5.845C6.696,5.845 5.817,9.358 5.817,13.685L5.817,37.205C5.817,41.532 6.696,45.045 7.777,45.045L43.057,45.045C44.139,45.045 45.017,41.532 45.017,37.205L45.017,13.685Z', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.612245,0,0,0.153061,15.4384,20.1053)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,13.685C45.017,9.358 44.139,5.845 43.057,5.845L7.777,5.845C6.696,5.845 5.817,9.358 5.817,13.685L5.817,37.205C5.817,41.532 6.696,45.045 7.777,45.045L43.057,45.045C44.139,45.045 45.017,41.532 45.017,37.205L45.017,13.685Z', style: { fill: "rgb(56,170,86)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.612245,0,0,0.153061,15.4384,33.1053)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,13.685C45.017,9.358 44.139,5.845 43.057,5.845L7.777,5.845C6.696,5.845 5.817,9.358 5.817,13.685L5.817,37.205C5.817,41.532 6.696,45.045 7.777,45.045L43.057,45.045C44.139,45.045 45.017,41.532 45.017,37.205L45.017,13.685Z', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.9375,0,0,0.9375,-1.44365,-2.72234)' },
                React__default.createElement(reactNativeSvg.Circle, { cx: '13.273', cy: '14.637', r: '6.4', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.9375,0,0,0.9375,-1.44365,10.2777)' },
                React__default.createElement(reactNativeSvg.Circle, { cx: '13.273', cy: '14.637', r: '6.4', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.9375,0,0,0.9375,-1.44365,23.2777)' },
                React__default.createElement(reactNativeSvg.Circle, { cx: '13.273', cy: '14.637', r: '6.4', style: { fill: "rgb(246,187,26)" } })
            )
        )
    );
};

var VoiceMessage = function VoiceMessage() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Voice-Message', serifId: 'Voice Message', transform: 'matrix(1,0,0,1,-0.162561,-0.328613)' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.816327,0,0,0.153061,3.25122,30.1053)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M45.017,8.981C45.017,7.25 44.754,5.845 44.429,5.845L6.405,5.845C6.081,5.845 5.817,7.25 5.817,8.981L5.817,41.909C5.817,43.64 6.081,45.045 6.405,45.045L44.429,45.045C44.754,45.045 45.017,43.64 45.017,41.909L45.017,8.981Z', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1.21864,0,0,1.21864,-6.23765,-6.49728)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M14.626,14.897C18.754,14.897 22.106,18.249 22.106,22.377C22.106,26.506 18.754,29.857 14.626,29.857C10.498,29.857 7.146,26.506 7.146,22.377C7.146,18.249 10.498,14.897 14.626,14.897ZM14.626,18.637C16.69,18.637 18.366,20.313 18.366,22.377C18.366,24.442 16.69,26.117 14.626,26.117C12.562,26.117 10.886,24.442 10.886,22.377C10.886,20.313 12.562,18.637 14.626,18.637Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1.21864,0,0,1.21864,18.915,-6.49728)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M14.626,14.897C18.754,14.897 22.106,18.249 22.106,22.377C22.106,26.506 18.754,29.857 14.626,29.857C10.498,29.857 7.146,26.506 7.146,22.377C7.146,18.249 10.498,14.897 14.626,14.897ZM14.626,18.637C16.69,18.637 18.366,20.313 18.366,22.377C18.366,24.442 16.69,26.117 14.626,26.117C12.562,26.117 10.886,24.442 10.886,22.377C10.886,20.313 12.562,18.637 14.626,18.637Z', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,-0.859856,-1.42476)' },
                React__default.createElement(reactNativeSvg.Circle, { cx: '12.446', cy: '22.197', r: '3.94', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,24.2928,-1.42476)' },
                React__default.createElement(reactNativeSvg.Circle, { cx: '12.446', cy: '22.197', r: '3.94', style: { fill: "rgb(56,170,86)" } })
            )
        )
    );
};

var WorkFlow = function WorkFlow() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Workflow' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.0748031,0,0,0.0748031,4.85039,4.85039)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M205.2,2L27.4,2C13.4,2 2,13.4 2,27.4L2,205.2C2,219.2 13.4,230.6 27.4,230.6L205.2,230.6C219.2,230.6 230.6,219.2 230.6,205.2L230.6,27.4C230.6,13.4 219.2,2 205.2,2ZM179.8,179.8L52.8,179.8L52.8,52.8L179.8,52.8L179.8,179.8Z', style: { fill: "rgb(233,74,60)", fillRule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.0748031,0,0,0.0748031,4.85039,4.85039)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M484.6,281.4L306.8,281.4C292.8,281.4 281.4,292.8 281.4,306.8L281.4,484.6C281.4,498.6 292.8,510 306.8,510L484.6,510C498.6,510 510,498.6 510,484.6L510,306.8C510,292.8 498.6,281.4 484.6,281.4Z', style: { fill: "rgb(56,170,86)", fillRule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.0748031,0,0,0.0748031,4.85039,4.85039)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M205.2,484.6L52.8,484.6C38.8,484.6 27.4,473.2 27.4,459.2L27.4,306.8C27.4,292.8 38.8,281.4 52.8,281.4C66.8,281.4 78.2,292.8 78.2,306.8L78.2,433.8L205.2,433.8C219.2,433.8 230.6,445.2 230.6,459.2C230.6,473.2 219.2,484.6 205.2,484.6Z', style: { fill: "rgb(90,130,194)", fillRule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.0748031,0,0,0.0748031,4.85039,4.85039)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M306.8,27.4L459.2,27.4C473.2,27.4 484.6,38.8 484.6,52.8L484.6,205.2C484.6,219.2 473.2,230.6 459.2,230.6C445.2,230.6 433.8,219.2 433.8,205.2L433.8,78.2L306.8,78.2C292.8,78.2 281.4,66.8 281.4,52.8C281.4,38.8 292.8,27.4 306.8,27.4Z', style: { fill: "rgb(246,187,26)", fillRule: "nonzero" } })
            )
        )
    );
};

var WorkSpace = function WorkSpace() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Workspace', transform: 'matrix(1.73076,0,0,2.06184,-1574.31,-520.501)' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1.1729,0,0,0.925234,910.149,253.019)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M4,12L4,4L16,4L16,7L18,7L18,2L2,2L2,14L8.466,14L8.456,16L5,16L5,18L14.835,18L14.835,16.004L12.889,16.005L12.899,13.992L14.835,13.985L14.835,12L4,12Z', style: { fill: "rgb(246,187,26)", fillRule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.683658,0,0,0.849821,919.41,254.603)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M14,9L14,22L22,22L22,9L14,9ZM18,19C17.4,19 17,18.5 17,18C17,17.4 17.4,17 18,17C18.5,17 19,17.4 19,18C19,18.5 18.5,19 18,19ZM20,13L16,13L16,11L20,11L20,13Z', style: { fill: "rgb(90,130,194)", fillRule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.149533,0,0,0.149533,778.157,216.534)' },
                React__default.createElement(reactNativeSvg.Rect, { x: '898.386', y: '361.369', width: '102.25', height: '18.25', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.149533,0,0,0.08298,778.4,236.115)' },
                React__default.createElement(reactNativeSvg.Rect, { x: '922.136', y: '278.369', width: '73.75', height: '29.25', style: { fill: "rgb(56,170,86)" } })
            )
        )
    );
};

var Create = function Create() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', style: { fillrule: "evenodd", cliprule: "evenodd", strokelinejoin: "round", strokemiterlimit: 2 } },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Collaboration-Suite', serifId: 'Collaboration Suite', transform: 'matrix(1.1845,-0.00722212,-0.00722212,-1.1845,3.53043,43.1312)' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.228567,-0.00139362,0.00139362,0.228567,-246.409,-101.337)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M1210.31,450.767L1147.64,450.385L1147.26,513.055L1209.93,513.437L1210.31,450.767ZM1198.19,501.556L1159.14,501.318L1159.38,462.266L1198.43,462.504L1198.19,501.556Z', style: { fill: "rgb(93,133,197)", fillrule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.220618,-0.00134516,0.00134516,0.220618,-235.104,-98.5859)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M1132.51,527.622L1075.35,527.273L1075,584.435L1132.17,584.784L1132.51,527.622ZM1122.8,575.302L1084.49,575.068L1084.72,536.755L1123.03,536.989L1122.8,575.302Z', style: { fill: "rgb(61,174,89)", fillrule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.800552,-1.41977e-18,6.94368e-19,0.800552,1.32807,2.86641)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M14.325,0L14.325,14.325L0,14.325L0,0L14.325,0ZM7.162,2.162C9.922,2.162 12.163,4.403 12.163,7.162C12.163,9.922 9.922,12.163 7.162,12.163C4.403,12.163 2.162,9.922 2.162,7.162C2.162,4.403 4.403,2.162 7.162,2.162Z', style: { fill: "rgb(239,77,62)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,-8.67362e-19,8.67362e-19,1,1.42955,-0.00871624)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M32,17.675L32,32L17.675,32L17.675,17.675L32,17.675ZM24.837,19.837C27.597,19.837 29.837,22.078 29.837,24.837C29.837,27.597 27.597,29.837 24.837,29.837C22.078,29.837 19.837,27.597 19.837,24.837C19.837,22.078 22.078,19.837 24.837,19.837Z', style: { fill: "rgb(255,192,0)" } })
            )
        )
    );
};

var Doctor = function Doctor() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { xmlns: 'http://www.w3.org/2000/svg', width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', style: { fillrule: "evenodd", cliprule: "evenodd", strokelinejoin: "round", strokemiterlimit: 2 } },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Doctor' },
            React__default.createElement(reactNativeSvg.Path, { d: 'M34.566,28.634C34.529,30.327 28.928,34.508 28.928,34.508C28.928,34.508 23.328,30.327 23.29,28.634C18.561,29.066 14.857,33.041 14.857,37.883C14.857,43.013 19.015,43 24.145,43L33.711,43C38.841,43 43,43.013 43,37.883C43,33.041 39.296,29.066 34.566,28.634ZM36.078,32.974C38.42,32.974 40.322,34.875 40.322,37.217C40.322,39.559 38.42,41.461 36.078,41.461C33.736,41.461 31.835,39.559 31.835,37.217C31.835,34.875 33.736,32.974 36.078,32.974Z', style: { fill: "rgb(56,170,86)" } }),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.429754,0,0,0.429754,-312.623,-144.427)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M804.231,420.504L809.231,420.504L809.231,415.504L813.564,415.504L813.564,420.504L818.564,420.504L818.564,424.838L813.564,424.838L813.564,429.838L809.231,429.838L809.231,424.838L804.231,424.838L804.231,420.504Z', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(reactNativeSvg.Path, { d: 'M21.905,17.953L27.217,17.953C27.653,18.395 28.259,18.67 28.929,18.67C29.6,18.67 30.206,18.395 30.642,17.953L35.953,17.953L35.954,17.965C36.008,18.336 36.036,18.716 36.036,19.103C36.036,19.49 36.008,19.87 35.954,20.241C35.566,25.408 32.569,29.428 28.929,29.428C25.334,29.428 22.367,25.51 21.919,20.439C21.913,20.372 21.907,20.305 21.902,20.238C21.871,20.018 21.849,19.795 21.836,19.57C21.827,19.415 21.821,19.26 21.821,19.103C21.821,18.717 21.849,18.338 21.902,17.968L21.905,17.953L21.904,17.953C21.952,17.625 22.021,17.305 22.107,16.993L21.905,17.953Z', style: { fill: "rgb(246,187,26)" } }),
            React__default.createElement(reactNativeSvg.Path, { d: 'M22.146,16.858L22.144,16.864L22.146,16.858Z', style: 'fill:rgb(246,187,26);' }),
            React__default.createElement(reactNativeSvg.Path, { d: 'M35.548,16.404L31.331,16.404C31.334,16.357 31.335,16.311 31.335,16.264C31.335,14.937 30.257,13.859 28.929,13.859C27.602,13.859 26.524,14.937 26.524,16.264C26.524,16.311 26.525,16.357 26.528,16.404L22.298,16.404C23.326,13.606 25.907,11.621 28.928,11.621C31.948,11.621 34.528,13.604 35.548,16.404L35.559,16.404C35.579,16.457 35.598,16.511 35.617,16.565L35.548,16.404Z', style: { fill: "rgb(56,170,86)" } }),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.302766,0,0,0.302766,-237.377,-120.959)' },
                React__default.createElement(reactNativeSvg.Circle, { cx: '879.579', cy: '453.231', r: '4.958', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(-0.85836,0,0,0.85836,22.1672,5)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M16.5,13C14.7,13 13.3,14.3 13.1,16L7,16L7,12.9C9.8,12.4 12,10 12,7L12,1L9,1L9,0L7,0L7,4L9,4L9,3L10,3L10,7C10,9.2 8.2,11 6,11C3.8,11 2,9.2 2,7L2,3L3,3L3,4L5,4L5,0L3,0L3,1L0,1L0,7C0,10 2.2,12.4 5,12.9L5,17C5,17.6 5.4,18 6,18L13.4,18C14,19.2 15.2,20 16.5,20C18.4,20 20,18.4 20,16.5C20,14.6 18.4,13 16.5,13ZM16.5,18C15.7,18 15,17.3 15,16.5C15,15.7 15.7,15 16.5,15C17.3,15 18,15.7 18,16.5C18,17.3 17.3,18 16.5,18Z', style: { fill: "rgb(90,130,194)", fillrule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.198896,0,0,0.347057,-160.614,-151.074)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M868.138,523.306C868.138,521.981 867.062,520.906 865.738,520.906L860.938,520.906C859.613,520.906 858.538,521.981 858.538,523.306L858.538,539.706C858.538,541.03 859.613,542.106 860.938,542.106L865.738,542.106C867.062,542.106 868.138,541.03 868.138,539.706L868.138,523.306Z', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.198896,0,0,0.228927,-163.311,-87.0356)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M868.138,523.306C868.138,521.981 867.062,520.906 865.738,520.906L860.938,520.906C859.613,520.906 858.538,521.981 858.538,523.306L858.538,539.706C858.538,541.03 859.613,542.106 860.938,542.106L865.738,542.106C867.062,542.106 868.138,541.03 868.138,539.706L868.138,523.306Z', style: { fill: "rgb(90,130,194)" } })
            )
        )
    );
};

var Hospital = function Hospital() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { xmlns: 'http://www.w3.org/2000/svg', width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', style: { fillrule: "evenodd", cliprule: "evenodd", strokelinejoin: "round", strokemiterlimit: 2 } },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Hospital', transform: 'matrix(1,0,0,1,3,0)' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(-0.871139,0,0,0.871139,50.1023,5.92759)' },
                React__default.createElement(
                    reactNativeSvg.G,
                    { transform: 'matrix(1,0,0,1,0,1.71478)' },
                    React__default.createElement(reactNativeSvg.Path, { d: 'M12.533,35.448C11.987,34.605 11.597,32.366 11.597,29.739C11.597,26.392 12.231,23.674 13.013,23.674C13.795,23.674 14.43,26.392 14.43,29.739C14.43,32.366 14.039,34.605 13.493,35.448L13.493,44.285L12.533,44.285L12.533,35.448Z', style: { fill: "rgb(56,170,86)" } })
                ),
                React__default.createElement(
                    reactNativeSvg.G,
                    { transform: 'matrix(1,0,0,1,0,1.71478)' },
                    React__default.createElement(reactNativeSvg.Path, { d: 'M17.458,32.163C16.683,31.26 16.113,28.225 16.113,24.625C16.113,20.313 16.931,16.813 17.938,16.813C18.945,16.813 19.762,20.313 19.762,24.625C19.762,28.225 19.192,31.26 18.418,32.163L18.418,44.285L17.458,44.285L17.458,32.163Z', style: { fill: "rgb(56,170,86)" } })
                )
            ),
            React__default.createElement(reactNativeSvg.Path, { d: 'M19.009,2C22.519,2 25.369,4.85 25.369,8.36C25.369,11.87 22.519,14.72 19.009,14.72C15.499,14.72 12.649,11.87 12.649,8.36C12.649,4.85 15.499,2 19.009,2ZM19.009,3.28C21.813,3.28 24.089,5.556 24.089,8.36C24.089,11.164 21.813,13.44 19.009,13.44C16.206,13.44 13.929,11.164 13.929,8.36C13.929,5.556 16.206,3.28 19.009,3.28Z', style: { fill: "rgb(56,170,86)" } }),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,-1.04986,16.0348)' },
                React__default.createElement(reactNativeSvg.Rect, { x: '14.019', y: '20.365', width: '5.44', height: '9.6', style: { fill: "rgb(246,187,26)" } }),
                React__default.createElement(
                    reactNativeSvg.G,
                    { transform: 'matrix(1,0,0,1,6.64,0)' },
                    React__default.createElement(reactNativeSvg.Rect, { x: '14.019', y: '20.365', width: '5.44', height: '9.6', style: { fill: "rgb(246,187,26)" } })
                )
            ),
            React__default.createElement(reactNativeSvg.Path, { d: 'M26.442,9.505C28.443,9.88 29.969,11.817 29.969,14.147L29.969,46L26.729,46L26.729,35.28L11.289,35.28L11.289,46L8.049,46L8.049,14.147C8.049,11.817 9.575,9.88 11.576,9.505C12.128,13.113 15.248,15.88 19.009,15.88C22.77,15.88 25.89,13.113 26.442,9.505ZM15.969,26.125L11.969,26.125L11.969,30.125L15.969,30.125L15.969,26.125ZM26.049,27.445L20.129,27.445L20.129,28.805L26.049,28.805L26.049,27.445ZM15.969,18.765L11.969,18.765L11.969,22.765L15.969,22.765L15.969,18.765ZM26.049,20.085L20.129,20.085L20.129,21.445L26.049,21.445L26.049,20.085Z', style: { fill: "rgb(90,130,194)" } }),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,-0.529863,0.71478)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M20.659,6.525L22.979,6.525L22.979,8.765L20.659,8.765L20.659,11.085L18.419,11.085L18.419,8.765L16.099,8.765L16.099,6.525L18.419,6.525L18.419,4.205L20.659,4.205L20.659,6.525Z', style: { fill: "rgb(233,74,60)" } })
            )
        )
    );
};

var Patient = function Patient() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { xmlns: 'http://www.w3.org/2000/svg', width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', style: { fillrule: "evenodd", cliprule: "evenodd", strokelinejoin: "round", strokemiterlimit: 2 } },
        React__default.createElement(
            reactNativeSvg.G,
            { id: 'Patient', transform: 'matrix(0.350473,0,0,0.350473,-232.75,-151.687)' },
            React__default.createElement(reactNativeSvg.Path, { d: 'M726.876,516.63L724.662,511.483L716.507,492.53C718.873,494.874 723.421,496.461 728.647,496.461C736.251,496.461 742.427,493.098 742.518,488.932C754.156,489.995 763.268,499.777 763.269,511.687C763.269,522.406 755.889,524 745.935,524.237L745.935,525.363C745.935,531.821 740.683,537.074 734.225,537.074L705.915,537.074C699.457,537.074 694.203,531.821 694.203,525.364L694.203,523.195C694.203,521.392 694.618,519.686 695.35,518.16C694.494,516.496 694.025,514.381 694.025,511.688C694.025,502.778 699.125,495.063 706.564,491.293L704.438,511.587L703.875,516.958C701.249,517.815 699.35,520.282 699.35,523.194L699.35,525.362C699.35,528.988 702.289,531.926 705.914,531.926L734.224,531.926C737.849,531.925 740.787,528.987 740.787,525.362L740.787,523.193C740.787,519.569 737.849,516.63 734.224,516.63L726.876,516.63ZM711.361,468.275C711.373,468.44 711.388,468.604 711.403,468.768C712.505,481.245 719.805,490.887 728.648,490.887C737.49,490.887 744.791,481.245 745.893,468.768C745.909,468.604 745.921,468.44 745.935,468.275C746.014,467.734 746.066,467.186 746.098,466.629C746.119,466.249 746.134,465.868 746.134,465.482C746.134,464.533 746.066,463.6 745.935,462.689C744.657,453.848 737.404,447.074 728.648,447.074C719.892,447.074 712.639,453.848 711.361,462.689C711.229,463.6 711.161,464.533 711.161,465.482C711.161,465.868 711.176,466.25 711.196,466.629C711.23,467.186 711.282,467.734 711.361,468.275Z', style: { fill: "rgb(246,187,26)" } }),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.714373,0,0,0.714373,209.832,216.833)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M779.647,448.074L779.647,459.074C779.647,459.627 780.095,460.074 780.647,460.074L796.647,460.074C797.201,460.073 797.647,459.626 797.647,459.074L797.647,448.074L807.647,448.074L807.647,469.074C807.647,471.831 805.404,474.074 802.647,474.074L774.647,474.074C771.89,474.074 769.647,471.831 769.647,469.074L769.647,448.074L779.647,448.074ZM795.647,444.074L795.647,458.074L781.647,458.074L781.647,444.074L795.647,444.074ZM789.647,450.074L789.647,447.074C789.647,446.522 789.199,446.074 788.647,446.074C788.095,446.074 787.647,446.522 787.647,447.074L787.647,450.074L784.647,450.074C784.094,450.074 783.647,450.521 783.647,451.074C783.647,451.627 784.095,452.074 784.647,452.074L787.647,452.074L787.647,455.074C787.647,455.627 788.095,456.074 788.647,456.074C789.199,456.074 789.647,455.627 789.647,455.074L789.647,452.074L792.647,452.074C793.201,452.073 793.647,451.626 793.647,451.074C793.647,450.521 793.201,450.074 792.647,450.074L789.647,450.074ZM798.647,420.074C799.201,420.074 799.647,420.522 799.647,421.074L799.647,427.074C799.647,427.626 799.2,428.074 798.647,428.074L797.647,428.074L797.647,431.074C797.647,432.728 798.993,434.074 800.647,434.074L802.647,434.074C805.404,434.074 807.647,436.317 807.647,439.074L807.647,446.074L797.647,446.074L797.647,443.074C797.647,442.522 797.2,442.074 796.647,442.074L780.647,442.074C780.095,442.074 779.647,442.522 779.647,443.074L779.647,446.074L769.647,446.074L769.647,439.074C769.647,436.317 771.89,434.074 774.647,434.074L776.647,434.074C778.302,434.073 779.647,432.727 779.647,431.074L779.647,428.074L778.647,428.074C778.095,428.073 777.647,427.625 777.647,427.074L777.647,421.074C777.647,420.522 778.095,420.074 778.647,420.074L798.647,420.074Z', style: { fill: "rgb(56,170,86)", fillrule: "nonzero" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.26384,0,0,0.26384,511.175,399.418)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M725.124,292.644C726.889,292.661 728.648,293.361 729.968,294.733C738.768,303.733 747.568,312.833 756.368,321.933C758.968,324.533 758.868,328.833 756.268,331.633C745.806,341.945 735.357,352.272 724.912,362.602L704.024,383.263C693.579,393.594 683.131,403.92 672.668,414.233C670.068,416.833 665.668,416.833 663.068,414.133C653.868,404.833 644.768,395.633 635.668,386.333C632.968,383.633 633.068,379.233 635.768,376.633C663.968,349.233 692.168,321.833 720.368,294.533C721.676,293.273 723.359,292.647 725.043,292.644L725.124,292.644ZM734.668,355.633L697.368,392.433C704.668,399.633 711.968,406.833 719.268,414.033C721.968,416.633 726.268,416.633 728.868,413.933C737.968,404.633 747.068,395.433 756.268,386.133C758.968,383.433 758.868,379.133 756.168,376.433C749.668,370.233 741.668,362.433 734.668,355.633ZM661.968,401.633C659.868,401.633 658.168,399.933 658.168,397.833C658.168,395.733 659.868,394.033 661.968,394.033C664.068,394.033 665.768,395.733 665.768,397.833C665.768,399.933 664.068,401.633 661.968,401.633ZM729.968,401.633C727.868,401.633 726.168,399.933 726.168,397.833C726.168,395.733 727.868,394.033 729.968,394.033C732.068,394.033 733.768,395.733 733.768,397.833C733.768,399.933 731.968,401.633 729.968,401.633ZM675.568,395.033C673.468,395.033 671.768,393.333 671.768,391.233C671.768,389.133 673.468,387.433 675.568,387.433C677.668,387.433 679.368,389.133 679.368,391.233C679.368,393.333 677.668,395.033 675.568,395.033ZM716.368,395.033C714.268,395.033 712.568,393.333 712.568,391.233C712.568,389.133 714.268,387.433 716.368,387.433C718.468,387.433 720.168,389.133 720.168,391.233C720.168,393.333 718.468,395.033 716.368,395.033ZM651.768,390.633C649.668,390.633 647.968,388.933 647.968,386.833C647.968,384.733 649.668,383.033 651.768,383.033C653.868,383.033 655.568,384.733 655.568,386.833C655.568,388.933 653.868,390.633 651.768,390.633ZM740.168,390.633C738.068,390.633 736.368,388.933 736.368,386.833C736.368,384.733 738.068,383.033 740.168,383.033C742.268,383.033 743.968,384.733 743.968,386.833C743.968,388.933 742.268,390.633 740.168,390.633ZM692.468,387.633C691.968,388.133 691.268,388.333 690.668,388.333C689.968,388.333 689.368,388.133 688.868,387.633L662.968,362.133L666.568,358.433L690.568,382.133L726.268,346.633L729.868,350.333L692.468,387.633ZM665.368,386.033C663.268,386.033 661.568,384.333 661.568,382.233C661.568,380.133 663.268,378.433 665.368,378.433C667.468,378.433 669.168,380.133 669.168,382.233C669.168,384.333 667.468,386.033 665.368,386.033ZM722.768,382.233C722.768,380.133 724.468,378.433 726.568,378.433C728.668,378.433 730.368,380.133 730.368,382.233C730.368,384.333 728.668,386.033 726.568,386.033C724.468,386.033 722.768,384.333 722.768,382.233ZM655.068,376.433C652.968,376.433 651.268,374.733 651.268,372.633C651.268,370.533 652.968,368.833 655.068,368.833C657.168,368.833 658.868,370.533 658.868,372.633C658.868,374.733 657.168,376.433 655.068,376.433ZM733.068,372.633C733.068,370.533 734.768,368.833 736.868,368.833C738.968,368.833 740.668,370.533 740.668,372.633C740.668,374.733 738.968,376.433 736.868,376.433C734.768,376.433 733.068,374.733 733.068,372.633ZM657.268,352.833L694.468,316.733C687.168,309.633 679.868,302.633 672.668,295.533C669.968,292.933 665.668,292.933 663.068,295.733C654.268,304.833 645.468,313.933 636.668,322.933C634.068,325.633 634.068,329.933 636.768,332.533C643.568,339.233 650.468,346.033 657.268,352.833ZM660.268,335.633C660.268,337.733 658.568,339.533 656.368,339.533C654.268,339.533 652.468,337.833 652.468,335.633C652.468,333.533 654.168,331.733 656.368,331.733C658.468,331.733 660.268,333.533 660.268,335.633ZM736.568,338.533C734.468,338.533 732.668,336.833 732.668,334.633C732.668,332.533 734.368,330.733 736.568,330.733C738.668,330.733 740.468,332.433 740.468,334.633C740.468,336.733 738.768,338.533 736.568,338.533ZM671.868,325.833C671.868,327.933 670.168,329.733 667.968,329.733C665.868,329.733 664.068,328.033 664.068,325.833C664.068,323.733 665.768,321.933 667.968,321.933C670.168,321.933 671.868,323.733 671.868,325.833ZM724.968,320.933C727.068,320.933 728.868,322.633 728.868,324.833C728.868,326.933 727.168,328.733 724.968,328.733C722.868,328.733 721.068,327.033 721.068,324.833C721.068,322.733 722.868,320.933 724.968,320.933ZM654.168,317.233C656.268,317.233 658.068,318.933 658.068,321.133C658.068,323.233 656.368,325.033 654.168,325.033C652.068,325.033 650.268,323.333 650.268,321.133C650.268,319.033 651.968,317.233 654.168,317.233ZM738.868,324.033C736.768,324.033 734.968,322.333 734.968,320.133C734.968,318.033 736.668,316.233 738.868,316.233C740.968,316.233 742.768,317.933 742.768,320.133C742.668,322.233 740.968,324.033 738.868,324.033ZM678.568,311.733C680.668,311.733 682.468,313.433 682.468,315.633C682.468,317.733 680.768,319.533 678.568,319.533C676.468,319.533 674.668,317.833 674.668,315.633C674.668,313.433 676.368,311.733 678.568,311.733ZM714.468,310.733C716.568,310.733 718.368,312.433 718.368,314.633C718.368,316.733 716.668,318.533 714.468,318.533C712.368,318.533 710.568,316.833 710.568,314.633C710.568,312.433 712.268,310.733 714.468,310.733ZM664.668,307.133C666.768,307.133 668.568,308.833 668.568,311.033C668.568,313.133 666.868,314.933 664.668,314.933C662.568,314.933 660.768,313.233 660.768,311.033C660.768,308.833 662.568,307.133 664.668,307.133ZM728.268,313.833C726.168,313.833 724.368,312.133 724.368,309.933C724.368,307.833 726.068,306.033 728.268,306.033C730.368,306.033 732.168,307.733 732.168,309.933C732.168,312.133 730.468,313.833 728.268,313.833Z', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1.37975,0,0,1.37975,-353.82,-110.056)' },
                React__default.createElement(reactNativeSvg.Path, { d: 'M804.231,420.504L809.231,420.504L809.231,415.504L813.564,415.504L813.564,420.504L818.564,420.504L818.564,424.838L813.564,424.838L813.564,429.838L809.231,429.838L809.231,424.838L804.231,424.838L804.231,420.504Z', style: { fill: "rgb(233,74,60)" } })
            )
        )
    );
};

var Status = function Status() {
    return React__default.createElement(
        reactNativeSvg.Svg,
        { xmlns: 'http://www.w3.org/2000/svg', width: '100%', height: '100%', viewBox: '0 0 48 48', version: '1.1', style: 'fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;' },
        React__default.createElement(
            reactNativeSvg.G,
            { transform: 'matrix(1,0,0,1,0,-0.586194)' },
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1.45935,0,0,1.45935,2.89257,-8.4917)' },
                React__default.createElement(reactNativeSvg.Circle, { cx: '13.533', cy: '22.666', r: '4.18', style: { fill: "rgb(56,170,86)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.971545,0,0,0.971545,28.7908,2.56497)' },
                React__default.createElement(reactNativeSvg.Circle, { cx: '13.533', cy: '22.666', r: '4.18', style: { fill: "rgb(233,74,60)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(0.646795,0,0,0.646795,-4.04988,9.92582)' },
                React__default.createElement(reactNativeSvg.Circle, { cx: '13.533', cy: '22.666', r: '4.18', style: { fill: "rgb(246,187,26)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,0.344433,0.254866)' },
                React__default.createElement(reactNativeSvg.Rect, { x: '8.47', y: '23.584', width: '6.321', height: '1.495', style: { fill: "rgb(90,130,194)" } })
            ),
            React__default.createElement(
                reactNativeSvg.G,
                { transform: 'matrix(1,0,0,1,21.6799,0.254866)' },
                React__default.createElement(reactNativeSvg.Rect, { x: '8.47', y: '23.584', width: '6.321', height: '1.495', style: { fill: "rgb(90,130,194)" } })
            )
        )
    );
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var _IconList;

var IconList = (_IconList = {
   'calendar-text': function calendarText(props) {
      return React__default.createElement(Activity, props);
   },
   'AIAnalytics': function AIAnalytics$$1(props) {
      return React__default.createElement(AIAnalytics, props);
   },
   'Budget': function Budget$$1(props) {
      return React__default.createElement(Budget, props);
   },
   'Calendar': function Calendar$$1(props) {
      return React__default.createElement(Calendar, props);
   },
   'message-text': function messageText(props) {
      return React__default.createElement(Chat, props);
   },
   'format-list-bulleted': function formatListBulleted(props) {
      return React__default.createElement(Checklist, props);
   },
   'material-design': function materialDesign(props) {
      return React__default.createElement(Design, props);
   },
   'blur': function blur(props) {
      return React__default.createElement(Chat, props);
   },
   'ticket': function ticket(props) {
      return React__default.createElement(EMS, props);
   },
   'forum': function forum(props) {
      return React__default.createElement(Groups, props);
   },
   'clipboard-text': function clipboardText(props) {
      return React__default.createElement(Tasks, props);
   },
   'calendar-today': function calendarToday(props) {
      return React__default.createElement(Meetings, props);
   },
   'clipboard-check': function clipboardCheck(props) {
      return React__default.createElement(Project, props);
   },
   'radar': function radar(props) {
      return React__default.createElement(Target, props);
   },
   'poll': function poll(props) {
      return React__default.createElement(Polls, props);
   },
   'bullhorn': function bullhorn(props) {
      return React__default.createElement(Promotion, props);
   },
   'calendar': function calendar(props) {
      return React__default.createElement(Event, props);
   },
   'finance': function finance(props) {
      return React__default.createElement(Eventdata, props);
   },
   'wallet': function wallet(props) {
      return React__default.createElement(Expenses, props);
   },
   'Location': function Location$$1(props) {
      return React__default.createElement(Location, props);
   },
   'Notes': function Notes$$1(props) {
      return React__default.createElement(Notes, props);
   },
   'playlist-check': function playlistCheck(props) {
      return React__default.createElement(Planning, props);
   },
   'ticket-confirmation': function ticketConfirmation(props) {
      return React__default.createElement(PO, props);
   },
   'checkbook': function checkbook(props) {
      return React__default.createElement(Proposal, props);
   },
   'Publishing': function Publishing$$1(props) {
      return React__default.createElement(Publishing, props);
   },
   'Questions': function Questions$$1(props) {
      return React__default.createElement(Questions, props);
   },
   'Remainder': function Remainder$$1(props) {
      return React__default.createElement(Remainder, props);
   },
   'Sales': function Sales$$1(props) {
      return React__default.createElement(Sales, props);
   },
   'Tags': function Tags$$1(props) {
      return React__default.createElement(Tags, props);
   }
}, defineProperty(_IconList, 'ticket-confirmation', function ticketConfirmation(props) {
   return React__default.createElement(Tickets, props);
}), defineProperty(_IconList, 'format-list-checkbox', function formatListCheckbox(props) {
   return React__default.createElement(Todos, props);
}), defineProperty(_IconList, 'VoiceMessage', function VoiceMessage$$1(props) {
   return React__default.createElement(VoiceMessage, props);
}), defineProperty(_IconList, 'book-open', function bookOpen(props) {
   return React__default.createElement(WorkFlow, props);
}), defineProperty(_IconList, 'briefcase', function briefcase(props) {
   return React__default.createElement(WorkSpace, props);
}), defineProperty(_IconList, 'Create', function Create$$1(props) {
   return React__default.createElement(Create, props);
}), defineProperty(_IconList, 'Doctor', function Doctor$$1(props) {
   return React__default.createElement(Doctor, props);
}), defineProperty(_IconList, 'Hospital', function Hospital$$1(props) {
   return React__default.createElement(Hospital, props);
}), defineProperty(_IconList, 'Patient', function Patient$$1(props) {
   return React__default.createElement(Patient, props);
}), defineProperty(_IconList, 'Meeting', function Meeting(props) {
   return React__default.createElement(Meetings, props);
}), defineProperty(_IconList, 'Status', function Status$$1(props) {
   return React__default.createElement(Status, props);
}), _IconList);
var Icon = function Icon(props) {
   return IconList[props.name] ? IconList[props.name](props) : IconList['blur'](props);
};

var ExampleComponent = function (_Component) {
  inherits(ExampleComponent, _Component);

  function ExampleComponent() {
    classCallCheck(this, ExampleComponent);
    return possibleConstructorReturn(this, (ExampleComponent.__proto__ || Object.getPrototypeOf(ExampleComponent)).apply(this, arguments));
  }

  createClass(ExampleComponent, [{
    key: 'render',
    value: function render() {
      return React__default.createElement(Icon, this.props);
    }
  }]);
  return ExampleComponent;
}(React.Component);

ExampleComponent.propTypes = {
  text: PropTypes.string
};

module.exports = ExampleComponent;
//# sourceMappingURL=index.js.map
