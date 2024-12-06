
let url = "file:///C:/Users/Divyanshu.Jain/Workspace/pers/text-framents/index.html#:~:text=Get%20an%20introduction%20to%20the%20programming%20skills%20needed%20for%20a%20career%20as%20a%20.NET%20software%20developer.%20Experience%20.NET%20learning%20courses%20that%20provide%20a%20broad%20perspective%20on%20core%20technologies%20leveraging%20.NET."

if (url.includes("#:~:text=")) {
   let index = url.indexOf("=");
   console.log(index);  
   let fragmentText = url.substring(++index);
   console.log(fragmentText.replaceAll("%20", " "));
}
else {
   console.log("failed to go in");
}
