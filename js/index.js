/**
 * Created by shaojunyan on 2017-5-16.
 */
(function () {
    function showAskDialog() {
        document.getElementById('addQuesModal').style.display = "block";
    }
    function closeAskDialog() {
        document.getElementById('addQuesModal').style.display = "none";
    }
    function showAsk(){
        document.getElementById('showAskDialog').onclick=function() {
            showAskDialog();
        }
        document.getElementById('showAskDialog2').onclick=function() {
            showAskDialog();
        }
    }
    function closeAsk(){
        // document.getElementById('closeAskDialog').onclick=function() {
        //     closeAskDialog();
        // }
        document.getElementById('closeAskDialog').addEventListener("click",function (e) {
            closeAskDialog();
        })
        document.getElementById('closeAskDialog2').addEventListener("click",function (e) {
            closeAskDialog();
        })
    }
    showAsk();
    closeAsk();
})()