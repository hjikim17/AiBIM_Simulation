        // document.addEventListener('DOMContentLoaded', function () {
        //     document.querySelector('#toggleButton').addEventListener('click', function () { 
        //         const cube = document.querySelector('.cube'); 
        //         const isVisible = cube.getAttribute('visible'); 
    
        //         if (isVisible) {
        //             cube.setAttribute('visible', false); 
        //         } else {
        //             cube.setAttribute('visible', true); 
        //         }
        //     });
        // });

        // 정보 on/off 버튼
AFRAME.registerComponent('show', {
    init: function () {

            var button = document.querySelector('#toggleButton')
            button.addEventListener('click', function () { 
                const cube = document.querySelector('.cube'); 
                const isVisible = cube.getAttribute('visible'); 
    
                if (isVisible) {
                    cube.setAttribute('visible', false); 
                } else {
                    cube.setAttribute('visible', true); 
                }
        });


    //   var onbtn = document.querySelector("#onbtn");
    //   var offbtn = document.querySelector("#offbtn");
  
    //   var visible = true
    //   onbtn.addEventListener("click", (e) => {
  
    //     if (visible) {
    //       visible = false
    //       offbtn.setAttribute('visible', 'true');
    //     }
    //     else {
    //       visible = true
    //       onbtn.setAttribute('visible', 'true');
    //       offbtn.setAttribute('visible', 'false');
    //     }
    //   });
    }
  });