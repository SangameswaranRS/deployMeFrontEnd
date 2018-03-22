//------------------------------------Method Declarations--------------------------------------------//

var SERVER_BASE_URL='http://localhost:3607';
var COMPILE_API_URL=SERVER_BASE_URL+"/server/api/compile";
var deploy=function(){
    var selector = document.getElementById("dType");
    var type = selector.options[selector.selectedIndex].text;
    var actualType;
    if(type ==='Node.js'){
        actualType='node';
    }else if(type ==='Angular.js'){
        actualType='angular';
    }else if(type==='HTML Basic with AJAX and PHP calls'){
        actualType='html_basic';
    }
    //alert(actualType);
    var portq=document.getElementById('portNumber').value;
    var repoLink=document.getElementById('repoLink').value;
    var indexFile=document.getElementById('indexFile').value;
    var repoName=document.getElementById('repoName').value;
    if(actualType ==='html_basic'){
        if(portq!=="80"){
            alert('HTML Basic Servers can be deployed in port 80 Only');
        }else{
            console.log('port OK');
            //no need to check port availability for HTML Basic
            if (repoLink.length > 0 && indexFile.length > 0 && repoName.length > 0) {
                if (actualType === "node") {
                    var codeString = "type:node\n";
                    codeString += "githubUrl:\"" + repoLink + "\"" + "\n";
                    codeString += "indexFile:\"" + indexFile + "\"" + "\n";
                    codeString += "port:" + portq + "\n";
                    codeString += "repoName:" + "\"" + repoName + "\"" + "\n";
                    var postParam = {
                        deployMeCode: codeString
                    };
                    console.log(codeString);
                    postRequestGenericFunction(COMPILE_API_URL, postParam, function (err, data) {
                        if (err === null) {
                            alert(data.message);
                        } else {
                            alert('Something went wrong. Try Again!');
                        }
                    });
                } else if (actualType === 'angular') {
                    var angularCodeString = "type:angular\n";
                    angularCodeString += "githubUrl:" + "\"" + repoLink + "\"" + "\n";
                    angularCodeString += "indexFile:" + "\"" + indexFile + "\"" + "\n";
                    angularCodeString += "port:" + "\"" + portq + "\"" + "\n";
                    angularCodeString += "repoName:" + "\"" + repoName + "\"" + "\n";
                    var postParams = {
                        deployMeCode: angularCodeString
                    };
                    postRequestGenericFunction(COMPILE_API_URL, postParams, function (err, response) {
                        if (err === null) {
                            alert(response.message);
                        } else {
                            alert('Something went wrong. Try Again!')
                        }
                    });
                } else if (actualType === 'html_basic') {
                    var html_basicCodeString = "type:html_basic\n";
                    html_basicCodeString += "githubUrl:" + "\"" + repoLink + "\"" + "\n";
                    html_basicCodeString += "indexFile:" + "\"" + indexFile + "\"" + "\n";
                    html_basicCodeString += "repoName:" + "\"" + repoName + "\"" + "\n";
                    var postData = {
                        deployMeCode: html_basicCodeString
                    };
                    postRequestGenericFunction(COMPILE_API_URL, postData, function (err, response) {
                        if (err === null) {
                            alert(response.message);
                        } else {
                            alert('Something went wrong. Try Again!')
                        }
                    });
                }
            }else{
                alert('Enter all the fields');
            }
        }
    }else {
        //check port Availability
        if (actualType === 'html_basic') {
            //no need to check port availability for HTML Basic
            if (repoLink.length > 0 && indexFile.length > 0 && repoName.length > 0) {
                if (actualType === "node") {
                    var codeString = "type:node\n";
                    codeString += "githubUrl:\"" + repoLink + "\"" + "\n";
                    codeString += "indexFile:\"" + indexFile + "\"" + "\n";
                    codeString += "port:" + portq + "\n";
                    codeString += "repoName:" + "\"" + repoName + "\"" + "\n";
                    var postParam = {
                        deployMeCode: codeString
                    };
                    console.log(codeString);
                    postRequestGenericFunction(COMPILE_API_URL, postParam, function (err, data) {
                        if (err === null) {
                            alert(data.message);
                        } else {
                            alert('Something went wrong. Try Again!');
                        }
                    });
                } else if (actualType === 'angular') {
                    var angularCodeString = "type:angular\n";
                    angularCodeString += "githubUrl:" + "\"" + repoLink + "\"" + "\n";
                    angularCodeString += "indexFile:" + "\"" + indexFile + "\"" + "\n";
                    angularCodeString += "port:" + "\"" + portq + "\"" + "\n";
                    angularCodeString += "repoName:" + "\"" + repoName + "\"" + "\n";
                    var postParams = {
                        deployMeCode: angularCodeString
                    };
                    postRequestGenericFunction(COMPILE_API_URL, postParams, function (err, response) {
                        if (err === null) {
                            alert(response.message);
                        } else {
                            alert('Something went wrong. Try Again!')
                        }
                    });
                } else if (actualType === 'html_basic') {
                    var html_basicCodeString = "type:html_basic\n";
                    html_basicCodeString += "githubUrl:" + "\"" + repoLink + "\"" + "\n";
                    html_basicCodeString += "indexFile:" + "\"" + indexFile + "\"" + "\n";
                    html_basicCodeString += "repoName:" + "\"" + repoName + "\"" + "\n";
                    var postData = {
                        deployMeCode: html_basicCodeString
                    };
                    postRequestGenericFunction(COMPILE_API_URL, postData, function (err, data) {
                        if (err === null) {
                            alert(response.message);
                        } else {
                            alert('Something went wrong. Try Again!')
                        }
                    });
                }
            }else{
                alert('Enter all the fields');
            }
        } else {
            //Check port for angular and node servers.
            var postParamJson = {
                port: portq
            };
            console.log(postParamJson);
            var UPDATE_POST_API_URL = SERVER_BASE_URL + '/server/api/updatePortInfo';
            console.log(UPDATE_POST_API_URL);
            postRequestGenericFunction(UPDATE_POST_API_URL, postParamJson, function (err, response) {
                if (err === null) {
                    console.log('Port Available');
                    if (repoLink.length > 0 && indexFile.length > 0 && repoName.length > 0) {
                        if (actualType === "node") {
                            var codeString = "type:node\n";
                            codeString += "githubUrl:\"" + repoLink + "\"" + "\n";
                            codeString += "indexFile:\"" + indexFile + "\"" + "\n";
                            codeString += "port:" + portq + "\n";
                            codeString += "repoName:" + "\"" + repoName + "\"" + "\n";
                            var postParam = {
                                deployMeCode: codeString
                            };
                            console.log(codeString);
                            postRequestGenericFunction(COMPILE_API_URL, postParam, function (err, data) {
                                if (err === null) {
                                    alert(data.message);
                                } else {
                                    alert('Something went wrong. Try Again!');
                                }
                            });
                        } else if (actualType === 'angular') {
                            var angularCodeString = "type:angular\n";
                            angularCodeString += "githubUrl:" + "\"" + repoLink + "\"" + "\n";
                            angularCodeString += "indexFile:" + "\"" + indexFile + "\"" + "\n";
                            angularCodeString += "port:"  + portq  + "\n";
                            angularCodeString += "repoName:" + "\"" + repoName + "\"" + "\n";
                            console.log('Angular Code String');
                            console.log(angularCodeString);
                            var postParams = {
                                deployMeCode: angularCodeString
                            };
                            postRequestGenericFunction(COMPILE_API_URL, postParams, function (err, response) {
                                if (err === null) {
                                    alert(response.message);
                                } else {
                                    alert('Something went wrong. Try Again!')
                                }
                            });
                        } else if (actualType === 'html_basic') {
                            var html_basicCodeString = "type:html_basic\n";
                            html_basicCodeString += "githubUrl:" + "\"" + repoLink + "\"" + "\n";
                            html_basicCodeString += "indexFile:" + "\"" + indexFile + "\"" + "\n";
                            html_basicCodeString += "repoName:" + "\"" + repoName + "\"" + "\n";
                            var postData = {
                                deployMeCode: html_basicCodeString
                            };
                            postRequestGenericFunction(COMPILE_API_URL, postData, function (err, data) {
                                if (err === null) {
                                    alert(response.message);
                                } else {
                                    alert('Something went wrong. Try Again!')
                                }
                            });
                        }
                    }
                    else{
                        alert('Enter all the details');
                    }
                } else {
                    alert('Oops!.. The port is not available');
                }
            });

        }
    }
};

var postRequestGenericFunction=function (url,postParams,callBack) {
    var postRequest=new XMLHttpRequest();
    postRequest.responseType='json';
    postRequest.open('POST',url,true);
    console.log('Post params:='+postParams);
    postRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    postRequest.onload=function () {
        var status=postRequest.status;
        if(status ===200){
            console.log('response success, callback');
            callBack(null,postRequest.response);
        }else{
            console.log('Failed Response');
            callBack(postRequest.status,postRequest.response);
        }
    };
    postRequest.send(JSON.stringify(postParams));
};

var codingInterface=function () {
    document.getElementById('codingArea').style.visibility='visible';
    document.getElementById('compileBtn').style.visibility='visible';
};

var compile=function () {
    var deployMeCode=document.getElementById('codingArea').value;
    if(deployMeCode.length>0){
        var postParams={
            deployMeCode:deployMeCode
        };
        postRequestGenericFunction(COMPILE_API_URL,postParams,function (err,response) {
           if(err === null){
               alert(response.message);
           } else{
               alert('Connectivity Error');
           }
        });
    }else{
        alert('Enter Code to compile');
    }
};