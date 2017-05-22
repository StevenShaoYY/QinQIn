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
    function showLogDialog() {
        document.getElementById('userLogin').style.display = "block";
    }
    function closeLogDialog() {
        document.getElementById('userLogin').style.display = "none";
    }
    function showAsk(){
        document.getElementById('showAskDialog').onclick=function() {
            showAskDialog();
        }
        document.getElementById('showAskDialog2').onclick=function() {
            showAskDialog();
        }
        document.getElementById('showLogDialog').onclick=function() {
            showLogDialog();
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
        document.getElementById('closeLogDialog').addEventListener("click",function (e) {
            closeLogDialog();
        })
        document.getElementById('closeLogDialog2').addEventListener("click",function (e) {
            closeLogDialog();
        })
    }



    showAsk();//初始化提示框
    closeAsk();
    function getData(pageNum) {
        console.log(pageNum)
    }
    var pag  = new Pagination({
        id:"pagination",
        total:100,//页数
        showButtons:10,//每页显示按钮数
        callback:getData

    })

})();