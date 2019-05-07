// This file is used by Flex Tool Bar to create buttons on your Tool Bar.
// For more information how to use this package and create your own buttons,
// read the documentation on https://atom.io/packages/flex-tool-bar

(function() {
  module.exports = [
    {
      type: "function",
      text: "Run",
      icon: 'triangle-right',
      callback: function(target){
        var terminal;
        atom.packages.isPackageDisabled("platformio-ide-terminal")?
        terminal = atom.packages.enablePackage("platformio-ide-terminal"):
        terminal = atom.packages.getActivePackage("platformio-ide-terminal")
        var editor = atom.workspace.getActiveTextEditor()
        var file = editor.buffer.file
        var fileName = file.path
        var target = atom.views.getView(atom.workspace)

        //atom.commands.dispatch(target, "platformio-ide-terminal:toggle")
        atom.commands.dispatch(target , "platformio-ide-terminal:focus")

        var packagePath = atom.packages.resolvePackagePath("umsl-Virt-Machine")



        atom.config.set('platformio-ide-terminal.customTexts.customText1', `${packagePath}/exe/./assemblyVirtMach.exe ${fileName}`)
        atom.commands.dispatch(target, 'platformio-ide-terminal:insert-custom-text-1')


      },
      style: {
        color: "#ffbf00"
      },
      hover: {
        color: "red"
      }
    }, {
      type: "spacer"
    }, {
      type: "function",
      text: "Debug",
      icon: "beaker",
      callback: function (target) {
        var terminal;
        atom.packages.isPackageDisabled("platformio-ide-terminal") ?
          terminal = atom.packages.enablePackage("platformio-ide-terminal") :
          terminal = atom.packages.getActivePackage("platformio-ide-terminal")
        var editor = atom.workspace.getActiveTextEditor()
        var file = editor.buffer.file
        var fileName = file.path
        var target = atom.views.getView(atom.workspace)

        atom.commands.dispatch(target, "platformio-ide-terminal:focus")

        var packagePath = atom.packages.resolvePackagePath("umsl-Virt-Machine")

        atom.config.set('platformio-ide-terminal.customTexts.customText2', `${packagePath}/exe/./debug.exe ${fileName}`)
        atom.commands.dispatch(target, 'platformio-ide-terminal:insert-custom-text-2')


      },
      style: {
        color: "#ffbf00"
      },
      hover: {
        color: "red"
      }
    },
    {
      type: "spacer"
    },
    {
      type: "function",
      icon: "cloud-upload",
      callback: function (target) {
        const prompt = require('electron-prompt');
        var username, password;
        prompt({
          title: 'Credentials',
          label: 'Enter SSOID',
          value: 'ssoid',
          inputAttrs: {
            type: 'text'
          }
        })
          .then((promptUsername) => {
            if (promptUsername === null) {
              console.log('user cancelled');
              alert('cancelled');
              return;
            } else {
              username = promptUsername;
              prompt({
                title: 'Credentials',
                label: 'Ener Password:',
                value: '',
                inputAttrs: {
                  type: 'password'
                }
              })
                .then((promptPassword) => {
                  if (promptPassword === null) {
                    alert("cancelled");
                    console.log('user cancelled');
                    return;
                  } else {
                    password = promptPassword;
                    //Get details of currently opened file
                    var editor, file, filePath;
                    editor = atom.workspace.getActivePaneItem();
                    file = editor != null ? editor.buffer.file : void 0;
                    fileName = file != null ? file.getBaseName() : void 0;
                    filePath = file != null ? file.getPath() : void 0;
                    var Client = require('ssh2').Client;
                    var connSettings = {
                      host: 'delmar.umsl.edu',
                      port: 22, // Normal is 22 port
                      username: username,
                      password: password
                      // You can use a key file too, read the ssh2 documentation
                    };
                    var conn = new Client();
                    conn.on('ready', function () {
                      conn.sftp(function (err, sftp) {
                        if (err) throw err;

                        var fs = require("fs"); // Use node filesystem
                        var readStream = fs.createReadStream(filePath);
                        var writeStream = sftp.createWriteStream(fileName);

                        writeStream.on('close', function () {
                          console.log("- file transferred succesfully");
                          //Execute Submission Command
                          conn.shell(function (err, stream) {
                            if (err) throw err;
                            stream.on('close', function () {
                              console.log('Stream Closed');
                              alert('Submission Successful');
                              conn.end();
                            }).on('data', function (data) {
                              console.log('' + data);
                            }).stderr.on('data', function (data) {
                              console.log('Error: ' + data);
                            });
                            stream.end('echo \'submission command example\'\nexit\n');
                          });
                        });

                        writeStream.on('end', function () {
                          console.log("sftp connection closed");
                          conn.close();
                        });

                        // initiate transfer of file
                        readStream.pipe(writeStream);
                      });
                    }).connect(connSettings);
                    conn.on('error', function (err) {
                        alert( "Failed to Connect\nCheck your SSOID and Password");
                        return;
                        }
                    );
                  }
                })
                .catch(console.error);
            }
          })
          .catch(console.error);
        return;
      },
      text: "Submit",
      style: {
        color: "#ffbf00"
      },
      hover: {
        color: "red"
      }
    }, {
      type: "spacer"
    }, {
      type: "url",
      url: "https://github.com/Chaserich1/umsl-Virt-Machine/blob/master/helpmarkdown.md",
      text: "ToolTips",
      icon: "tools",
      style: {
        color: "#ffbf00"
      },
      hover: {
        color: "red"
      }
    }, {
      type: "spacer"
    }, {
      type: "url",
      url: "https://github.com/Chaserich1/umsl-Virt-Machine/blob/master/templatemarkdown.md",
      text: "Example Programs",
      icon: "book",
      style: {
        color: "#ffbf00"
      },
      hover: {
        color: "red"
      }
    }, {
      type: "spacer"
    }, {
      type: "url",
      url: "https://github.com/Chaserich1/umsl-Virt-Machine/blob/master/Instuctions%20for%20Group%20Project.pdf",
      text: "Documentation",
      icon: "list-unordered",
      style: {
        color: "#ffbf00"
      },
      hover: {
        color: "red"
      }
    },
  ];

}).call(this);
