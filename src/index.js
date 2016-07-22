var React = require('react');
var ReactDOM = require('react-dom');
var Zoom = require('anarchism').Zoom;
var el = React.createElement;

function renderModal(showModal) {
    ReactDOM.render(
        el(Zoom,
            { isVisible: showModal
            , width: '50%'
            , height: '50%'
            , hAlign: 'center'
            , vAlign: 'center'
            },
            el('div', { id: 'example-zoom-content'},
                el('h1', null, 'Content of the Modal'),
                el('button', {
                    onClick: renderModal.bind(undefined, false)
                }, 'Close')
            )
        ),
        document.getElementById('example-zoom')
    );
}

document.getElementById('example-zoom-button')
    .addEventListener('click', renderModal.bind(undefined, true));

// ReactDOM.render(
//     el(Zoom, {
//         isVisible: false,
//     })
//         <Zoom
//             isVisible={true} // show or hide the modal (default to false)
//             width="50%" // width of the modal in css format (default to "100%")
//             height="50%" // height of the modal in css format (default to "100%")
//             hAlign="center" // horizontal alignment ["left", "center", "right"] (default to "center")
//             vAlign="center" // vertical alignment ["top", "center", "bottom"] (default to "center")
//             offset={{ // offset from the current layout position
//                 x: '-20px' // horizontal offset in css format (default to "0")
//                 y: '5%' // vertical offset in css format (default to "0")
//             }}
//             zIndex={99} // zIndex for the modal (default to 1)
//             overlay={someNode} // jsx node element to create a background overlay
//         >
//
//             ... // content of the modal
//
//         </Zoom>
//     </div>,
//     document.getElementById('zoom-example')
// );
