## Installation
    $ sudo npm install -g kill-combo

## useage

    $ kill-bombo http://demo.com/??test/index.js,test2/index.js
    
      Split Url:
    
        1 http://demo.com/test/index.js
        2 http://demo.com/test2/index.js

To check out the status code:

    $ kill-bombo -c http://demo.com/??test/index.js,test2/index.js
    
      Url & Status:
    
        302   http://demo.com/test2/index.js
        302   http://demo.com/test/index.js

## License
MIT