window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('languagefield').textContent = data.language;
    document.getElementById('viewtypefield').textContent = data.context.viewType;
    document.getElementById('useridfield').textContent = data.context.userId;
    document.getElementById('utouidfield').textContent = data.context.utouId;
    document.getElementById('roomidfield').textContent = data.context.roomId;
    document.getElementById('groupidfield').textContent = data.context.groupId;

    // openWindow call
    document.getElementById('openwindowbutton').addEventListener('click', function () {
        liff.openWindow({
            url: 'https://line.me'
        });
    });

    // closeWindow call
    document.getElementById('closewindowbutton').addEventListener('click', function () {
        liff.closeWindow();
    });

    // sendMessages1
    document.getElementById('sendmessagebutton1').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/159360750/IOS/sticker_popup.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/13561'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages2
    document.getElementById('sendmessagebutton2').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/159360751/IOS/sticker_popup.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/13561'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });
 
    // sendMessages3
    document.getElementById('sendmessagebutton3').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/159360752/IOS/sticker_popup.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/13561'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });
   
    // sendMessages4
    document.getElementById('sendmessagebutton4').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/159360753/IOS/sticker_popup.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/13561'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });
    
    // sendMessages5
    document.getElementById('sendmessagebutton5').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/159360754/IOS/sticker_popup.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/13561'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });
    
    // sendMessages6
    document.getElementById('sendmessagebutton6').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/159360758/IOS/sticker_popup.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/13561'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });
    
    // sendMessages7
    document.getElementById('sendmessagebutton7').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/159360767/IOS/sticker_popup.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/13561'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages8
    document.getElementById('sendmessagebutton8').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/159360773/IOS/sticker_popup.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/13561'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages9
    document.getElementById('sendmessagebutton9').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/71941530/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/12093'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages10
    document.getElementById('sendmessagebutton10').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/216150840/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8575240'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages11
    document.getElementById('sendmessagebutton11').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14846/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/946'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages12
    document.getElementById('sendmessagebutton12').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/238477772/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9265797'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages13
    document.getElementById('sendmessagebutton13').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14848/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/946'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages14
    document.getElementById('sendmessagebutton14').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/28688221/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10488'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages15
    document.getElementById('sendmessagebutton15').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/240516120/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15737'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });
    
    // sendMessages16
    document.getElementById('sendmessagebutton16').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/231666042/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15412'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });
    
    // sendMessages17
    document.getElementById('sendmessagebutton17').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/6412041/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4819'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });
    
    // sendMessages18
    document.getElementById('sendmessagebutton18').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/6412048/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4819'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });
    
    // sendMessages19
    document.getElementById('sendmessagebutton19').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/223756508/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15235'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages20
    document.getElementById('sendmessagebutton20').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/216150869/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8575240'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages21
    document.getElementById('sendmessagebutton21').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/218806399/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15065'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages22
    document.getElementById('sendmessagebutton22').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/229635565/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15348'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages23
    document.getElementById('sendmessagebutton23').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/44666880/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/11329'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages24
    document.getElementById('sendmessagebutton24').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/30505567/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10597'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages25
    document.getElementById('sendmessagebutton25').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/12012493/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1296847'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages26
    document.getElementById('sendmessagebutton26').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122025/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages27
    document.getElementById('sendmessagebutton27').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122027/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages28
    document.getElementById('sendmessagebutton28').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122029/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages29
    document.getElementById('sendmessagebutton29').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122031/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages30
    document.getElementById('sendmessagebutton30').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122033/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages31
    document.getElementById('sendmessagebutton31').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122035/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages32
    document.getElementById('sendmessagebutton32').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122037/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages33
    document.getElementById('sendmessagebutton33').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122047/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages34
    document.getElementById('sendmessagebutton34').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122049/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages35
    document.getElementById('sendmessagebutton35').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122051/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages36
    document.getElementById('sendmessagebutton36').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122053/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages37
    document.getElementById('sendmessagebutton37').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11122055/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1274372'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages38
    document.getElementById('sendmessagebutton38').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697590/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages39
    document.getElementById('sendmessagebutton39').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697591/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages40
    document.getElementById('sendmessagebutton40').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697592/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages41
    document.getElementById('sendmessagebutton41').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697593/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages42
    document.getElementById('sendmessagebutton42').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697594/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages43
    document.getElementById('sendmessagebutton43').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697595/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages44
    document.getElementById('sendmessagebutton44').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697596/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages45
    document.getElementById('sendmessagebutton45').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697597/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages46
    document.getElementById('sendmessagebutton46').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697598/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages47
    document.getElementById('sendmessagebutton47').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697599/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages48
    document.getElementById('sendmessagebutton48').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697600/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages49
    document.getElementById('sendmessagebutton49').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697601/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages50
    document.getElementById('sendmessagebutton50').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697602/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages51
    document.getElementById('sendmessagebutton51').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697603/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages52
    document.getElementById('sendmessagebutton52').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697604/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages53
    document.getElementById('sendmessagebutton53').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697605/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages54
    document.getElementById('sendmessagebutton54').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697606/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages55
    document.getElementById('sendmessagebutton55').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697607/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages56
    document.getElementById('sendmessagebutton56').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697608/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages57
    document.getElementById('sendmessagebutton57').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697609/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages58
    document.getElementById('sendmessagebutton58').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697610/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages59
    document.getElementById('sendmessagebutton59').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697611/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages60
    document.getElementById('sendmessagebutton60').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697612/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages61
    document.getElementById('sendmessagebutton61').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/248697613/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15499'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages62
    document.getElementById('sendmessagebutton62').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/236357194/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9196669'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages63
    document.getElementById('sendmessagebutton63').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/236357187/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9196669'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages64
    document.getElementById('sendmessagebutton64').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/236357188/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9196669'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages65
    document.getElementById('sendmessagebutton65').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/236357189/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9196669'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages66
    document.getElementById('sendmessagebutton66').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/236357200/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9196669'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages67
    document.getElementById('sendmessagebutton67').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105254/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages68
    document.getElementById('sendmessagebutton68').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105255/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages69
    document.getElementById('sendmessagebutton69').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105256/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages70
    document.getElementById('sendmessagebutton70').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105257/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages71
    document.getElementById('sendmessagebutton71').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105258/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages72
    document.getElementById('sendmessagebutton72').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105259/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages73
    document.getElementById('sendmessagebutton73').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105260/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages74
    document.getElementById('sendmessagebutton74').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105261/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages75
    document.getElementById('sendmessagebutton75').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105262/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages76
    document.getElementById('sendmessagebutton76').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105263/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages77
    document.getElementById('sendmessagebutton77').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105264/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages78
    document.getElementById('sendmessagebutton78').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105265/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages79
    document.getElementById('sendmessagebutton79').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105266/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages80
    document.getElementById('sendmessagebutton80').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105267/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages81
    document.getElementById('sendmessagebutton81').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105268/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages82
    document.getElementById('sendmessagebutton82').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105269/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages83
    document.getElementById('sendmessagebutton83').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105270/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages84
    document.getElementById('sendmessagebutton84').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105271/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages85
    document.getElementById('sendmessagebutton85').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105272/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages86
    document.getElementById('sendmessagebutton86').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105273/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages87
    document.getElementById('sendmessagebutton87').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105274/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages88
    document.getElementById('sendmessagebutton88').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105275/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages89
    document.getElementById('sendmessagebutton89').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105276/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages90
    document.getElementById('sendmessagebutton90').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105277/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages91
    document.getElementById('sendmessagebutton91').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105278/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages92
    document.getElementById('sendmessagebutton92').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105279/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages93
    document.getElementById('sendmessagebutton93').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105280/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages94
    document.getElementById('sendmessagebutton94').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105281/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages95
    document.getElementById('sendmessagebutton95').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105282/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages96
    document.getElementById('sendmessagebutton96').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105283/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages97
    document.getElementById('sendmessagebutton97').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105284/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages98
    document.getElementById('sendmessagebutton98').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105285/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages99
    document.getElementById('sendmessagebutton99').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105286/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages100
    document.getElementById('sendmessagebutton100').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105287/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages101
    document.getElementById('sendmessagebutton101').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105288/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages102
    document.getElementById('sendmessagebutton102').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105289/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages103
    document.getElementById('sendmessagebutton103').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105290/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages104
    document.getElementById('sendmessagebutton104').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105291/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages105
    document.getElementById('sendmessagebutton105').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105292/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages106
    document.getElementById('sendmessagebutton106').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/202105293/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/8141837'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages107
    document.getElementById('sendmessagebutton107').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979790/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages108
    document.getElementById('sendmessagebutton108').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979791/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages109
    document.getElementById('sendmessagebutton109').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979792/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages110
    document.getElementById('sendmessagebutton110').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979793/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages111
    document.getElementById('sendmessagebutton111').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979794/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages112
    document.getElementById('sendmessagebutton112').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979795/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages113
    document.getElementById('sendmessagebutton113').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979796/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages114
    document.getElementById('sendmessagebutton114').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979797/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages115
    document.getElementById('sendmessagebutton115').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979798/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages116
    document.getElementById('sendmessagebutton116').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979799/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages117
    document.getElementById('sendmessagebutton117').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979800/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages118
    document.getElementById('sendmessagebutton118').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979801/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages119
    document.getElementById('sendmessagebutton119').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979802/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages120
    document.getElementById('sendmessagebutton120').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979803/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages121
    document.getElementById('sendmessagebutton121').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979804/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages122
    document.getElementById('sendmessagebutton122').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979805/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages123
    document.getElementById('sendmessagebutton123').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979806/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages124
    document.getElementById('sendmessagebutton124').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979807/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages125
    document.getElementById('sendmessagebutton125').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979808/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages126
    document.getElementById('sendmessagebutton126').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979809/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages127
    document.getElementById('sendmessagebutton127').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979810/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages128
    document.getElementById('sendmessagebutton128').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979811/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages129
    document.getElementById('sendmessagebutton129').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979812/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages130
    document.getElementById('sendmessagebutton130').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979813/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages131
    document.getElementById('sendmessagebutton131').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979814/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages132
    document.getElementById('sendmessagebutton132').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979815/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages133
    document.getElementById('sendmessagebutton133').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979816/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages134
    document.getElementById('sendmessagebutton134').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979817/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages135
    document.getElementById('sendmessagebutton135').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979818/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages136
    document.getElementById('sendmessagebutton136').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979819/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages137
    document.getElementById('sendmessagebutton137').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979820/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages138
    document.getElementById('sendmessagebutton138').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979821/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages139
    document.getElementById('sendmessagebutton139').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979822/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages140
    document.getElementById('sendmessagebutton140').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979823/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages141
    document.getElementById('sendmessagebutton141').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979824/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages142
    document.getElementById('sendmessagebutton142').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979825/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages143
    document.getElementById('sendmessagebutton143').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979826/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages144
    document.getElementById('sendmessagebutton144').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979827/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages145
    document.getElementById('sendmessagebutton145').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979828/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages146
    document.getElementById('sendmessagebutton146').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249979829/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9608134'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages147
    document.getElementById('sendmessagebutton147').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117062/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages148
    document.getElementById('sendmessagebutton148').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117063/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages149
    document.getElementById('sendmessagebutton149').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117064/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages150
    document.getElementById('sendmessagebutton150').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117065/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages151
    document.getElementById('sendmessagebutton151').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117066/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages152
    document.getElementById('sendmessagebutton152').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117067/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages153
    document.getElementById('sendmessagebutton153').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117068/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages154
    document.getElementById('sendmessagebutton154').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117069/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages155
    document.getElementById('sendmessagebutton155').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117070/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages156
    document.getElementById('sendmessagebutton156').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117071/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages157
    document.getElementById('sendmessagebutton157').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117072/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages158
    document.getElementById('sendmessagebutton158').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117073/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages159
    document.getElementById('sendmessagebutton159').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117074/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages160
    document.getElementById('sendmessagebutton160').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117075/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages161
    document.getElementById('sendmessagebutton161').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117076/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages162
    document.getElementById('sendmessagebutton162').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117077/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages163
    document.getElementById('sendmessagebutton163').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117078/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages164
    document.getElementById('sendmessagebutton164').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117079/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages165
    document.getElementById('sendmessagebutton165').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117080/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages166
    document.getElementById('sendmessagebutton166').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117081/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages167
    document.getElementById('sendmessagebutton167').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117082/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages168
    document.getElementById('sendmessagebutton168').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117083/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages169
    document.getElementById('sendmessagebutton169').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117084/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages170
    document.getElementById('sendmessagebutton170').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/249117085/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15815'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });
















































































































































































































































































































































































































































































































































































































































































































































































































































    // get access token
    document.getElementById('getaccesstoken').addEventListener('click', function () {
        const accessToken = liff.getAccessToken();
        document.getElementById('accesstokenfield').textContent = accessToken;
        toggleAccessToken();
    });

    // get profile call
    document.getElementById('getprofilebutton').addEventListener('click', function () {
        liff.getProfile().then(function (profile) {
            document.getElementById('useridprofilefield').textContent = profile.userId;
            document.getElementById('displaynamefield').textContent = profile.displayName;

            const profilePictureDiv = document.getElementById('profilepicturediv');
            if (profilePictureDiv.firstElementChild) {
                profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
            }
            const img = document.createElement('img');
            img.src = profile.pictureUrl;
            img.alt = "Profile Picture";
            profilePictureDiv.appendChild(img);

            document.getElementById('statusmessagefield').textContent = profile.statusMessage;
            toggleProfileData();
        }).catch(function (error) {
            window.alert("Error getting profile: " + error);
        });
    });
}

function toggleAccessToken() {
    toggleElement('accesstokendata');
}

function toggleProfileData() {
    toggleElement('profileinfo');
}

function toggleElement(elementId) {
    const elem = document.getElementById(elementId);
    if (elem.offsetWidth > 0 && elem.offsetHeight > 0) {
        elem.style.display = "none";
    } else {
        elem.style.display = "block";
    }
}
