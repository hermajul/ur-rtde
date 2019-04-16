# ur-rtde
Nodejs library for reading the data from the Realtime Data Exchange Interface of Universal robots

### Install

git clone https://github.com/hermajul/ur-rtde.git

Install dependencies from package.json
```sh
npm i
```

### Usage

see the file `example.js`

`new ur().onData(data);` where the argument is the buffer recieved from the TCP-Interface of the Robot.

It returns a JSON-Object which contains the decoded Informations based on the documentation of Universal Robots https://www.universal-robots.com/how-tos-and-faqs/how-to/ur-how-tos/remote-control-via-tcpip-16496/
respectively:
https://s3-eu-west-1.amazonaws.com/ur-support-site/16496/Client_Interface_V3.8andV5.2.xlsx

The file exampleOutput.json shows an exemplary output
