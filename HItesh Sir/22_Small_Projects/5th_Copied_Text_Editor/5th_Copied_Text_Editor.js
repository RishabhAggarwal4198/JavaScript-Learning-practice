function formatDoc ( cmd, value=null) {

        if(value){
                document.execCommand(cmd, false , value);  
                console.log(document.execCommand(cmd, false , value));    /* ❓❓❓ */   
        } else {
                document.execCommand(cmd);   
        } 
}



