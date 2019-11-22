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

    // sendMessages171
    document.getElementById('sendmessagebutton171').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968430/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages172
    document.getElementById('sendmessagebutton172').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968431/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages173
    document.getElementById('sendmessagebutton173').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968432/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages174
    document.getElementById('sendmessagebutton174').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968433/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages175
    document.getElementById('sendmessagebutton175').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968434/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages176
    document.getElementById('sendmessagebutton176').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968435/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages177
    document.getElementById('sendmessagebutton177').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968436/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages178
    document.getElementById('sendmessagebutton178').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968437/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages179
    document.getElementById('sendmessagebutton179').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968438/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages180
    document.getElementById('sendmessagebutton180').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968439/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages181
    document.getElementById('sendmessagebutton181').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968440/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages182
    document.getElementById('sendmessagebutton182').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968441/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages183
    document.getElementById('sendmessagebutton183').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968442/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages184
    document.getElementById('sendmessagebutton184').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968443/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages185
    document.getElementById('sendmessagebutton185').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968444/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages186
    document.getElementById('sendmessagebutton186').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968445/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages187
    document.getElementById('sendmessagebutton187').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968446/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages188
    document.getElementById('sendmessagebutton188').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968447/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages189
    document.getElementById('sendmessagebutton189').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968448/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages190
    document.getElementById('sendmessagebutton190').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968449/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages191
    document.getElementById('sendmessagebutton191').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968450/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages192
    document.getElementById('sendmessagebutton192').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968451/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages193
    document.getElementById('sendmessagebutton193').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968452/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages194
    document.getElementById('sendmessagebutton194').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250968453/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9638039'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages195
    document.getElementById('sendmessagebutton195').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597598/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages196
    document.getElementById('sendmessagebutton196').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597599/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages197
    document.getElementById('sendmessagebutton197').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597600/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages198
    document.getElementById('sendmessagebutton198').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597601/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages199
    document.getElementById('sendmessagebutton199').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597602/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages200
    document.getElementById('sendmessagebutton200').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597603/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages201
    document.getElementById('sendmessagebutton201').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597604/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages202
    document.getElementById('sendmessagebutton202').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597605/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages203
    document.getElementById('sendmessagebutton203').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597606/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages204
    document.getElementById('sendmessagebutton204').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597607/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages205
    document.getElementById('sendmessagebutton205').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597608/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages206
    document.getElementById('sendmessagebutton206').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597609/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages207
    document.getElementById('sendmessagebutton207').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597610/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages208
    document.getElementById('sendmessagebutton208').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597611/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages209
    document.getElementById('sendmessagebutton209').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597612/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages210
    document.getElementById('sendmessagebutton210').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597613/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages211
    document.getElementById('sendmessagebutton211').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597614/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages212
    document.getElementById('sendmessagebutton212').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597615/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages213
    document.getElementById('sendmessagebutton213').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597616/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages214
    document.getElementById('sendmessagebutton214').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597617/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages215
    document.getElementById('sendmessagebutton215').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597618/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages216
    document.getElementById('sendmessagebutton216').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597619/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages217
    document.getElementById('sendmessagebutton217').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597620/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages218
    document.getElementById('sendmessagebutton218').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597621/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages219
    document.getElementById('sendmessagebutton219').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597622/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages220
    document.getElementById('sendmessagebutton220').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597623/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages221
    document.getElementById('sendmessagebutton221').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597624/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages222
    document.getElementById('sendmessagebutton222').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597625/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages223
    document.getElementById('sendmessagebutton223').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597626/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages224
    document.getElementById('sendmessagebutton224').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597627/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages225
    document.getElementById('sendmessagebutton225').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597628/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages226
    document.getElementById('sendmessagebutton226').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597629/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages227
    document.getElementById('sendmessagebutton227').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597630/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages228
    document.getElementById('sendmessagebutton228').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597631/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages229
    document.getElementById('sendmessagebutton229').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597632/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages230
    document.getElementById('sendmessagebutton230').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597633/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages231
    document.getElementById('sendmessagebutton231').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597634/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages232
    document.getElementById('sendmessagebutton232').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597635/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages233
    document.getElementById('sendmessagebutton233').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597636/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages234
    document.getElementById('sendmessagebutton234').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251597637/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15824'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages235
    document.getElementById('sendmessagebutton235').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583326/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages236
    document.getElementById('sendmessagebutton236').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583327/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages237
    document.getElementById('sendmessagebutton237').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583328/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages238
    document.getElementById('sendmessagebutton238').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583329/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages239
    document.getElementById('sendmessagebutton239').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583330/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages240
    document.getElementById('sendmessagebutton240').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583331/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages241
    document.getElementById('sendmessagebutton241').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583332/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages242
    document.getElementById('sendmessagebutton242').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583333/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages243
    document.getElementById('sendmessagebutton243').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583334/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages244
    document.getElementById('sendmessagebutton244').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583335/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages245
    document.getElementById('sendmessagebutton245').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583336/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages246
    document.getElementById('sendmessagebutton246').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583337/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages247
    document.getElementById('sendmessagebutton247').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583338/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages248
    document.getElementById('sendmessagebutton248').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583339/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages249
    document.getElementById('sendmessagebutton249').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583340/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages250
    document.getElementById('sendmessagebutton250').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583341/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages251
    document.getElementById('sendmessagebutton251').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583342/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages252
    document.getElementById('sendmessagebutton252').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583343/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages253
    document.getElementById('sendmessagebutton253').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583344/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages254
    document.getElementById('sendmessagebutton254').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583345/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages255
    document.getElementById('sendmessagebutton255').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583346/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages256
    document.getElementById('sendmessagebutton256').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583347/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages257
    document.getElementById('sendmessagebutton257').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583348/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages258
    document.getElementById('sendmessagebutton258').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/251583349/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15823'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages259
    document.getElementById('sendmessagebutton259').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176599982/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages260
    document.getElementById('sendmessagebutton260').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176599983/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages261
    document.getElementById('sendmessagebutton261').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176599984/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages262
    document.getElementById('sendmessagebutton262').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176599985/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages263
    document.getElementById('sendmessagebutton263').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176599986/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages264
    document.getElementById('sendmessagebutton264').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176599987/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages265
    document.getElementById('sendmessagebutton265').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176599988/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages266
    document.getElementById('sendmessagebutton266').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176599989/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages267
    document.getElementById('sendmessagebutton267').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176599990/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages268
    document.getElementById('sendmessagebutton268').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176599991/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages269
    document.getElementById('sendmessagebutton269').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176599992/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages270
    document.getElementById('sendmessagebutton270').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176599993/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages271
    document.getElementById('sendmessagebutton271').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176599994/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages272
    document.getElementById('sendmessagebutton272').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176599995/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages273
    document.getElementById('sendmessagebutton273').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176599996/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages274
    document.getElementById('sendmessagebutton274').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176599997/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages275
    document.getElementById('sendmessagebutton275').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176599998/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages276
    document.getElementById('sendmessagebutton276').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176599999/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages277
    document.getElementById('sendmessagebutton277').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600000/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages278
    document.getElementById('sendmessagebutton278').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600001/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages279
    document.getElementById('sendmessagebutton279').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600002/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages280
    document.getElementById('sendmessagebutton280').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600003/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages281
    document.getElementById('sendmessagebutton281').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600004/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages282
    document.getElementById('sendmessagebutton282').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600005/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages283
    document.getElementById('sendmessagebutton283').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600006/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages284
    document.getElementById('sendmessagebutton284').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600007/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages285
    document.getElementById('sendmessagebutton285').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600008/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages286
    document.getElementById('sendmessagebutton286').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600009/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages287
    document.getElementById('sendmessagebutton287').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600010/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages288
    document.getElementById('sendmessagebutton288').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600011/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages289
    document.getElementById('sendmessagebutton289').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600012/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages290
    document.getElementById('sendmessagebutton290').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600013/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages291
    document.getElementById('sendmessagebutton291').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600014/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages292
    document.getElementById('sendmessagebutton292').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600015/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages293
    document.getElementById('sendmessagebutton293').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600016/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages294
    document.getElementById('sendmessagebutton294').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600017/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages295
    document.getElementById('sendmessagebutton295').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600018/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages296
    document.getElementById('sendmessagebutton296').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600019/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages297
    document.getElementById('sendmessagebutton297').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600020/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages298
    document.getElementById('sendmessagebutton298').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/176600021/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/14164'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages299
    document.getElementById('sendmessagebutton299').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142830/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages300
    document.getElementById('sendmessagebutton300').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142831/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages301
    document.getElementById('sendmessagebutton301').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142832/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages302
    document.getElementById('sendmessagebutton302').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142833/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages303
    document.getElementById('sendmessagebutton303').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142834/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages304
    document.getElementById('sendmessagebutton304').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142835/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages305
    document.getElementById('sendmessagebutton305').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142836/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages306
    document.getElementById('sendmessagebutton306').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142837/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages307
    document.getElementById('sendmessagebutton307').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142838/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages308
    document.getElementById('sendmessagebutton308').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142839/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages309
    document.getElementById('sendmessagebutton309').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142840/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages310
    document.getElementById('sendmessagebutton310').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142841/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages311
    document.getElementById('sendmessagebutton311').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142842/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages312
    document.getElementById('sendmessagebutton312').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142843/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages313
    document.getElementById('sendmessagebutton313').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142844/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages314
    document.getElementById('sendmessagebutton314').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142845/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages315
    document.getElementById('sendmessagebutton315').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142846/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages316
    document.getElementById('sendmessagebutton316').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142847/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages317
    document.getElementById('sendmessagebutton317').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142848/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages318
    document.getElementById('sendmessagebutton318').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142849/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages319
    document.getElementById('sendmessagebutton319').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142850/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages320
    document.getElementById('sendmessagebutton320').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142851/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages321
    document.getElementById('sendmessagebutton321').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142852/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages322
    document.getElementById('sendmessagebutton322').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142853/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages323
    document.getElementById('sendmessagebutton323').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142854/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages324
    document.getElementById('sendmessagebutton324').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142855/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages325
    document.getElementById('sendmessagebutton325').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142856/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages326
    document.getElementById('sendmessagebutton326').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142857/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages327
    document.getElementById('sendmessagebutton327').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142858/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages328
    document.getElementById('sendmessagebutton328').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142859/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages329
    document.getElementById('sendmessagebutton329').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142860/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages330
    document.getElementById('sendmessagebutton330').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/246142861/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9494082'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages331
    document.getElementById('sendmessagebutton331').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748386/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages332
    document.getElementById('sendmessagebutton332').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748387/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages333
    document.getElementById('sendmessagebutton333').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748388/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages334
    document.getElementById('sendmessagebutton334').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748389/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages335
    document.getElementById('sendmessagebutton335').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748390/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages336
    document.getElementById('sendmessagebutton336').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748391/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages337
    document.getElementById('sendmessagebutton337').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748392/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages338
    document.getElementById('sendmessagebutton338').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748393/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages339
    document.getElementById('sendmessagebutton339').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748394/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages340
    document.getElementById('sendmessagebutton340').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748395/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages341
    document.getElementById('sendmessagebutton341').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748396/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages342
    document.getElementById('sendmessagebutton342').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748397/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages343
    document.getElementById('sendmessagebutton343').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748398/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages344
    document.getElementById('sendmessagebutton344').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748399/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages345
    document.getElementById('sendmessagebutton345').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748400/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages346
    document.getElementById('sendmessagebutton346').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748401/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages347
    document.getElementById('sendmessagebutton347').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748402/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages348
    document.getElementById('sendmessagebutton348').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748403/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages349
    document.getElementById('sendmessagebutton349').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748404/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages350
    document.getElementById('sendmessagebutton350').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748405/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages351
    document.getElementById('sendmessagebutton351').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748406/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages352
    document.getElementById('sendmessagebutton352').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748407/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages353
    document.getElementById('sendmessagebutton353').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748408/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages354
    document.getElementById('sendmessagebutton354').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748409/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages355
    document.getElementById('sendmessagebutton355').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748410/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages356
    document.getElementById('sendmessagebutton356').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748411/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages357
    document.getElementById('sendmessagebutton357').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748412/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages358
    document.getElementById('sendmessagebutton358').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748413/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages359
    document.getElementById('sendmessagebutton359').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748414/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages360
    document.getElementById('sendmessagebutton360').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748415/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages361
    document.getElementById('sendmessagebutton361').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748416/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages362
    document.getElementById('sendmessagebutton362').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748417/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages363
    document.getElementById('sendmessagebutton363').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748418/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages364
    document.getElementById('sendmessagebutton364').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748419/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages365
    document.getElementById('sendmessagebutton365').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748420/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages366
    document.getElementById('sendmessagebutton366').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748421/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages367
    document.getElementById('sendmessagebutton367').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748422/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages368
    document.getElementById('sendmessagebutton368').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748423/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages369
    document.getElementById('sendmessagebutton369').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748424/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages370
    document.getElementById('sendmessagebutton370').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18748425/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/1523608'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages371
    document.getElementById('sendmessagebutton371').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289742/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages372
    document.getElementById('sendmessagebutton372').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289743/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages373
    document.getElementById('sendmessagebutton373').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289744/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages374
    document.getElementById('sendmessagebutton374').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289745/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages375
    document.getElementById('sendmessagebutton375').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289746/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages376
    document.getElementById('sendmessagebutton376').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289747/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages377
    document.getElementById('sendmessagebutton377').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289748/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages378
    document.getElementById('sendmessagebutton378').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289749/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages379
    document.getElementById('sendmessagebutton379').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289750/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages380
    document.getElementById('sendmessagebutton380').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289751/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages381
    document.getElementById('sendmessagebutton381').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289752/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages382
    document.getElementById('sendmessagebutton382').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289753/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages383
    document.getElementById('sendmessagebutton383').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289754/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages384
    document.getElementById('sendmessagebutton384').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289755/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages385
    document.getElementById('sendmessagebutton385').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289756/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages386
    document.getElementById('sendmessagebutton386').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289757/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages387
    document.getElementById('sendmessagebutton387').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289758/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages388
    document.getElementById('sendmessagebutton388').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289759/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages389
    document.getElementById('sendmessagebutton389').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289760/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages390
    document.getElementById('sendmessagebutton390').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289761/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages391
    document.getElementById('sendmessagebutton391').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289762/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages392
    document.getElementById('sendmessagebutton392').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289763/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages393
    document.getElementById('sendmessagebutton393').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289764/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages394
    document.getElementById('sendmessagebutton394').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289765/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages395
    document.getElementById('sendmessagebutton395').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289766/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages396
    document.getElementById('sendmessagebutton396').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289767/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages397
    document.getElementById('sendmessagebutton397').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289768/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages398
    document.getElementById('sendmessagebutton398').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289769/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages399
    document.getElementById('sendmessagebutton399').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289770/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages400
    document.getElementById('sendmessagebutton400').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289771/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages401
    document.getElementById('sendmessagebutton401').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289772/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages402
    document.getElementById('sendmessagebutton402').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289773/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages403
    document.getElementById('sendmessagebutton403').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289774/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages404
    document.getElementById('sendmessagebutton404').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289775/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages405
    document.getElementById('sendmessagebutton405').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289776/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages406
    document.getElementById('sendmessagebutton406').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289777/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages407
    document.getElementById('sendmessagebutton407').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289778/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages408
    document.getElementById('sendmessagebutton408').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289779/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages409
    document.getElementById('sendmessagebutton409').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289780/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages410
    document.getElementById('sendmessagebutton410').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/237289781/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9226202'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages411
    document.getElementById('sendmessagebutton411').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343326/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages412
    document.getElementById('sendmessagebutton412').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343327/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages413
    document.getElementById('sendmessagebutton413').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343328/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages414
    document.getElementById('sendmessagebutton414').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343329/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages415
    document.getElementById('sendmessagebutton415').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343330/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages416
    document.getElementById('sendmessagebutton416').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343331/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages417
    document.getElementById('sendmessagebutton417').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343332/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages418
    document.getElementById('sendmessagebutton418').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343333/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages419
    document.getElementById('sendmessagebutton419').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343334/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages420
    document.getElementById('sendmessagebutton420').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343335/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages421
    document.getElementById('sendmessagebutton421').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343336/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages422
    document.getElementById('sendmessagebutton422').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343337/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages423
    document.getElementById('sendmessagebutton423').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343338/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages424
    document.getElementById('sendmessagebutton424').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343339/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages425
    document.getElementById('sendmessagebutton425').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343340/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages426
    document.getElementById('sendmessagebutton426').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343341/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages427
    document.getElementById('sendmessagebutton427').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343342/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages428
    document.getElementById('sendmessagebutton428').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343343/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages429
    document.getElementById('sendmessagebutton429').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343344/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages430
    document.getElementById('sendmessagebutton430').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343345/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages431
    document.getElementById('sendmessagebutton431').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343346/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages432
    document.getElementById('sendmessagebutton432').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343347/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages433
    document.getElementById('sendmessagebutton433').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343348/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages434
    document.getElementById('sendmessagebutton434').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252343349/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15899'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages435
    document.getElementById('sendmessagebutton435').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518566/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15915'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages436
    document.getElementById('sendmessagebutton436').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518567/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15916'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages437
    document.getElementById('sendmessagebutton437').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518568/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15917'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages438
    document.getElementById('sendmessagebutton438').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518569/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15918'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages439
    document.getElementById('sendmessagebutton439').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518570/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15919'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages440
    document.getElementById('sendmessagebutton440').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518571/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15920'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages441
    document.getElementById('sendmessagebutton441').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518572/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15921'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages442
    document.getElementById('sendmessagebutton442').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518573/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages443
    document.getElementById('sendmessagebutton443').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518574/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15923'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages444
    document.getElementById('sendmessagebutton444').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518575/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15924'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages445
    document.getElementById('sendmessagebutton445').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518576/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15925'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages446
    document.getElementById('sendmessagebutton446').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518577/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15926'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages447
    document.getElementById('sendmessagebutton447').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518578/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15927'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages448
    document.getElementById('sendmessagebutton448').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518579/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15928'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages449
    document.getElementById('sendmessagebutton449').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518580/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15929'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages450
    document.getElementById('sendmessagebutton450').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518581/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15930'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages451
    document.getElementById('sendmessagebutton451').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518582/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15931'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages452
    document.getElementById('sendmessagebutton452').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518583/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15932'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages453
    document.getElementById('sendmessagebutton453').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518584/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15933'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages454
    document.getElementById('sendmessagebutton454').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518585/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15934'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages455
    document.getElementById('sendmessagebutton455').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518586/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15935'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages456
    document.getElementById('sendmessagebutton456').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518587/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15936'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages457
    document.getElementById('sendmessagebutton457').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518588/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15937'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages458
    document.getElementById('sendmessagebutton458').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/253518589/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15938'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages459
    document.getElementById('sendmessagebutton459').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672366/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages460
    document.getElementById('sendmessagebutton460').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672367/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages461
    document.getElementById('sendmessagebutton461').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672368/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages462
    document.getElementById('sendmessagebutton462').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672369/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages463
    document.getElementById('sendmessagebutton463').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672370/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages464
    document.getElementById('sendmessagebutton464').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672371/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages465
    document.getElementById('sendmessagebutton465').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672372/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages466
    document.getElementById('sendmessagebutton466').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672373/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages467
    document.getElementById('sendmessagebutton467').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672374/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages468
    document.getElementById('sendmessagebutton468').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672375/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages469
    document.getElementById('sendmessagebutton469').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672376/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages470
    document.getElementById('sendmessagebutton470').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672377/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages471
    document.getElementById('sendmessagebutton471').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672378/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages472
    document.getElementById('sendmessagebutton472').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672379/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages473
    document.getElementById('sendmessagebutton473').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672380/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages474
    document.getElementById('sendmessagebutton474').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672381/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages475
    document.getElementById('sendmessagebutton475').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672382/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages476
    document.getElementById('sendmessagebutton476').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672383/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages477
    document.getElementById('sendmessagebutton477').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672384/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages478
    document.getElementById('sendmessagebutton478').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672385/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages479
    document.getElementById('sendmessagebutton479').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672386/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages480
    document.getElementById('sendmessagebutton480').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672387/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages481
    document.getElementById('sendmessagebutton481').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672388/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages482
    document.getElementById('sendmessagebutton482').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252672389/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15908'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages483
    document.getElementById('sendmessagebutton483').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/2468/android/sticker.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/537'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages484
    document.getElementById('sendmessagebutton484').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/2469/android/sticker.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/537'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages485
    document.getElementById('sendmessagebutton485').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/2470/android/sticker.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/537'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages486
    document.getElementById('sendmessagebutton486').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/2471/android/sticker.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/537'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages487
    document.getElementById('sendmessagebutton487').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/2472/android/sticker.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/537'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages488
    document.getElementById('sendmessagebutton488').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/2473/android/sticker.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/537'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages489
    document.getElementById('sendmessagebutton489').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/2474/android/sticker.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/537'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages490
    document.getElementById('sendmessagebutton490').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/2475/android/sticker.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/537'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages491
    document.getElementById('sendmessagebutton491').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/7023/android/sticker.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/660'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages492
    document.getElementById('sendmessagebutton492').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/7024/android/sticker.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/660'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages493
    document.getElementById('sendmessagebutton493').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/7025/android/sticker.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/660'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages494
    document.getElementById('sendmessagebutton494').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/7026/android/sticker.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/660'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages495
    document.getElementById('sendmessagebutton495').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/7027/android/sticker.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/660'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages496
    document.getElementById('sendmessagebutton496').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/7028/android/sticker.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/660'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages497
    document.getElementById('sendmessagebutton497').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/7029/android/sticker.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/660'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages498
    document.getElementById('sendmessagebutton498').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/7030/android/sticker.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/660'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages499
    document.getElementById('sendmessagebutton499').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13527/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/882'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages500
    document.getElementById('sendmessagebutton500').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13528/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/882'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages501
    document.getElementById('sendmessagebutton501').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13529/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/882'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages502
    document.getElementById('sendmessagebutton502').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13530/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/882'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages503
    document.getElementById('sendmessagebutton503').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13531/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/882'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages504
    document.getElementById('sendmessagebutton504').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13532/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/882'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages505
    document.getElementById('sendmessagebutton505').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13533/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/882'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages506
    document.getElementById('sendmessagebutton506').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13534/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/882'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages507
    document.getElementById('sendmessagebutton507').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202806/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages508
    document.getElementById('sendmessagebutton508').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202807/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages509
    document.getElementById('sendmessagebutton509').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202808/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages510
    document.getElementById('sendmessagebutton510').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202809/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages511
    document.getElementById('sendmessagebutton511').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202810/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages512
    document.getElementById('sendmessagebutton512').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202811/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages513
    document.getElementById('sendmessagebutton513').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202812/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages514
    document.getElementById('sendmessagebutton514').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202813/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages515
    document.getElementById('sendmessagebutton515').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202814/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages516
    document.getElementById('sendmessagebutton516').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202815/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages517
    document.getElementById('sendmessagebutton517').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202816/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages518
    document.getElementById('sendmessagebutton518').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202817/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages519
    document.getElementById('sendmessagebutton519').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202818/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages520
    document.getElementById('sendmessagebutton520').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202819/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages521
    document.getElementById('sendmessagebutton521').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202820/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages522
    document.getElementById('sendmessagebutton522').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202821/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages523
    document.getElementById('sendmessagebutton523').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202822/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages524
    document.getElementById('sendmessagebutton524').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202823/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages525
    document.getElementById('sendmessagebutton525').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202824/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages526
    document.getElementById('sendmessagebutton526').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202825/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages527
    document.getElementById('sendmessagebutton527').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202826/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages528
    document.getElementById('sendmessagebutton528').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202827/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages529
    document.getElementById('sendmessagebutton529').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202828/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages530
    document.getElementById('sendmessagebutton530').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202829/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages531
    document.getElementById('sendmessagebutton531').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202830/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages532
    document.getElementById('sendmessagebutton532').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202831/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages533
    document.getElementById('sendmessagebutton533').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202832/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages534
    document.getElementById('sendmessagebutton534').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202833/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages535
    document.getElementById('sendmessagebutton535').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202834/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages536
    document.getElementById('sendmessagebutton536').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202835/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages537
    document.getElementById('sendmessagebutton537').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202836/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages538
    document.getElementById('sendmessagebutton538').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202837/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages539
    document.getElementById('sendmessagebutton539').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202838/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages540
    document.getElementById('sendmessagebutton540').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202839/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages541
    document.getElementById('sendmessagebutton541').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202840/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages542
    document.getElementById('sendmessagebutton542').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202841/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages543
    document.getElementById('sendmessagebutton543').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202842/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages544
    document.getElementById('sendmessagebutton544').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202843/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages545
    document.getElementById('sendmessagebutton545').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202844/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages546
    document.getElementById('sendmessagebutton546').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/252202845/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9677405'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages547
    document.getElementById('sendmessagebutton547').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084750/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages548
    document.getElementById('sendmessagebutton548').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084751/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages549
    document.getElementById('sendmessagebutton549').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084752/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages550
    document.getElementById('sendmessagebutton550').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084753/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages551
    document.getElementById('sendmessagebutton551').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084754/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages552
    document.getElementById('sendmessagebutton552').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084755/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages553
    document.getElementById('sendmessagebutton553').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084756/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages554
    document.getElementById('sendmessagebutton554').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084757/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages555
    document.getElementById('sendmessagebutton555').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084758/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages556
    document.getElementById('sendmessagebutton556').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084759/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages557
    document.getElementById('sendmessagebutton557').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084760/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages558
    document.getElementById('sendmessagebutton558').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084761/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages559
    document.getElementById('sendmessagebutton559').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084762/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages560
    document.getElementById('sendmessagebutton560').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084763/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages561
    document.getElementById('sendmessagebutton561').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084764/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages562
    document.getElementById('sendmessagebutton562').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084765/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages563
    document.getElementById('sendmessagebutton563').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084766/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages564
    document.getElementById('sendmessagebutton564').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084767/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages565
    document.getElementById('sendmessagebutton565').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084768/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages566
    document.getElementById('sendmessagebutton566').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084769/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages567
    document.getElementById('sendmessagebutton567').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084770/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages568
    document.getElementById('sendmessagebutton568').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084771/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages569
    document.getElementById('sendmessagebutton569').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084772/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages570
    document.getElementById('sendmessagebutton570').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/254084773/IOS/sticker_animation@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/15922'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages571
    document.getElementById('sendmessagebutton571').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744184/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages572
    document.getElementById('sendmessagebutton572').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744185/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages573
    document.getElementById('sendmessagebutton573').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744186/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages574
    document.getElementById('sendmessagebutton574').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744187/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages575
    document.getElementById('sendmessagebutton575').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744188/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages576
    document.getElementById('sendmessagebutton576').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744189/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages577
    document.getElementById('sendmessagebutton577').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744190/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages578
    document.getElementById('sendmessagebutton578').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744191/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages579
    document.getElementById('sendmessagebutton579').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744192/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages580
    document.getElementById('sendmessagebutton580').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744193/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages581
    document.getElementById('sendmessagebutton581').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744194/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages582
    document.getElementById('sendmessagebutton582').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744195/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages583
    document.getElementById('sendmessagebutton583').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744196/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages584
    document.getElementById('sendmessagebutton584').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744197/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages585
    document.getElementById('sendmessagebutton585').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744198/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages586
    document.getElementById('sendmessagebutton586').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744199/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages587
    document.getElementById('sendmessagebutton587').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744200/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages588
    document.getElementById('sendmessagebutton588').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744201/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages589
    document.getElementById('sendmessagebutton589').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744202/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages590
    document.getElementById('sendmessagebutton590').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744203/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages591
    document.getElementById('sendmessagebutton591').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744204/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages592
    document.getElementById('sendmessagebutton592').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744205/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages593
    document.getElementById('sendmessagebutton593').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744206/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages594
    document.getElementById('sendmessagebutton594').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/32744207/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/10780'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages595
    document.getElementById('sendmessagebutton595').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403374/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages596
    document.getElementById('sendmessagebutton596').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403375/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages597
    document.getElementById('sendmessagebutton597').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403376/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages598
    document.getElementById('sendmessagebutton598').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403377/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages599
    document.getElementById('sendmessagebutton599').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403378/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages600
    document.getElementById('sendmessagebutton600').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403379/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages601
    document.getElementById('sendmessagebutton601').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403380/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages602
    document.getElementById('sendmessagebutton602').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403381/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages603
    document.getElementById('sendmessagebutton603').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403382/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages604
    document.getElementById('sendmessagebutton604').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403383/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages605
    document.getElementById('sendmessagebutton605').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403384/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages606
    document.getElementById('sendmessagebutton606').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403385/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages607
    document.getElementById('sendmessagebutton607').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403386/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages608
    document.getElementById('sendmessagebutton608').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403387/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages609
    document.getElementById('sendmessagebutton609').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403388/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages610
    document.getElementById('sendmessagebutton610').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403389/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages611
    document.getElementById('sendmessagebutton611').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403390/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages612
    document.getElementById('sendmessagebutton612').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403391/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages613
    document.getElementById('sendmessagebutton613').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403392/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages614
    document.getElementById('sendmessagebutton614').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403393/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages615
    document.getElementById('sendmessagebutton615').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403394/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages616
    document.getElementById('sendmessagebutton616').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403395/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages617
    document.getElementById('sendmessagebutton617').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403396/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages618
    document.getElementById('sendmessagebutton618').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403397/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages619
    document.getElementById('sendmessagebutton619').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403398/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages620
    document.getElementById('sendmessagebutton620').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403399/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages621
    document.getElementById('sendmessagebutton621').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403400/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages622
    document.getElementById('sendmessagebutton622').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403401/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages623
    document.getElementById('sendmessagebutton623').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403402/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages624
    document.getElementById('sendmessagebutton624').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403403/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages625
    document.getElementById('sendmessagebutton625').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403404/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages626
    document.getElementById('sendmessagebutton626').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403405/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages627
    document.getElementById('sendmessagebutton627').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403406/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages628
    document.getElementById('sendmessagebutton628').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403407/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages629
    document.getElementById('sendmessagebutton629').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403408/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages630
    document.getElementById('sendmessagebutton630').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403409/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages631
    document.getElementById('sendmessagebutton631').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403410/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages632
    document.getElementById('sendmessagebutton632').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403411/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages633
    document.getElementById('sendmessagebutton633').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403412/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages634
    document.getElementById('sendmessagebutton634').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/62403413/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/4058818'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages635
    document.getElementById('sendmessagebutton635').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612198/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages636
    document.getElementById('sendmessagebutton636').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612199/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages637
    document.getElementById('sendmessagebutton637').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612200/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages638
    document.getElementById('sendmessagebutton638').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612201/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages639
    document.getElementById('sendmessagebutton639').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612202/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages640
    document.getElementById('sendmessagebutton640').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612203/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages641
    document.getElementById('sendmessagebutton641').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612204/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages642
    document.getElementById('sendmessagebutton642').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612205/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages643
    document.getElementById('sendmessagebutton643').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612206/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages644
    document.getElementById('sendmessagebutton644').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612207/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages645
    document.getElementById('sendmessagebutton645').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612208/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages646
    document.getElementById('sendmessagebutton646').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612209/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages647
    document.getElementById('sendmessagebutton647').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612210/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages648
    document.getElementById('sendmessagebutton648').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612211/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages649
    document.getElementById('sendmessagebutton649').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612212/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages650
    document.getElementById('sendmessagebutton650').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612213/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages651
    document.getElementById('sendmessagebutton651').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612214/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages652
    document.getElementById('sendmessagebutton652').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612215/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages653
    document.getElementById('sendmessagebutton653').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612216/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages654
    document.getElementById('sendmessagebutton654').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612217/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages655
    document.getElementById('sendmessagebutton655').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612218/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages656
    document.getElementById('sendmessagebutton656').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612219/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages657
    document.getElementById('sendmessagebutton657').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612220/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages658
    document.getElementById('sendmessagebutton658').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612221/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages659
    document.getElementById('sendmessagebutton659').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612222/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages660
    document.getElementById('sendmessagebutton660').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612223/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages661
    document.getElementById('sendmessagebutton661').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612224/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages662
    document.getElementById('sendmessagebutton662').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612225/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages663
    document.getElementById('sendmessagebutton663').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612226/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages664
    document.getElementById('sendmessagebutton664').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612227/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages665
    document.getElementById('sendmessagebutton665').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612228/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages666
    document.getElementById('sendmessagebutton666').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612229/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages667
    document.getElementById('sendmessagebutton667').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612230/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages668
    document.getElementById('sendmessagebutton668').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612231/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages669
    document.getElementById('sendmessagebutton669').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612232/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages670
    document.getElementById('sendmessagebutton670').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612233/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages671
    document.getElementById('sendmessagebutton671').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612234/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages672
    document.getElementById('sendmessagebutton672').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612235/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages673
    document.getElementById('sendmessagebutton673').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612236/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    });

    // sendMessages674
    document.getElementById('sendmessagebutton674').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'template',
          altText: 'Sticker',
          template: {
             type: 'image_carousel',
             columns: [{
                 imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/250612237/IOS/sticker@2x.png',
                 action: {
                     type: 'uri',
                     uri: 'line://shop/sticker/detail/9627029'}}
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
