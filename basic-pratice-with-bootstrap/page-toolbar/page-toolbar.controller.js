(function() {
    'use strict';

    angular
        .module('pageToolbar')
        .controller('pageToolbarController', pageToolbarController);

    function pageToolbarController(){
        var self = this;

        //properties
        self.pageButtons = getPageButtons();
        self.selectPage = 1;
        self.currentPage = 1;
        self.maxPage = 20;

        //function
        self.clickPrevBtn = clickPrevBtn;
        self.clickNextBtn = clickNextBtn;
        self.getClickedClass = getClickedClass;
        self.getCurrentPageBtn = getCurrentPageBtn;
        self.getDisableClass = getDisableClass;
        self.goToThePage = goToThePage;

        /////////////////

        function getPageButtons () {
            var btns = [];
            for (var i = 1; i < 1 + 10; i++) btns.push(i);
            return btns;
        }

        function getCurrentPageBtn (numPage) {
            self.currentPage = numPage;
        }

        function getClickedClass (numPage) {
            return {
                clicked: self.currentPage === numPage,
                disabled: self.currentPage === numPage
            }
        }

        function getDisableClass(nameBtn) {
            if (nameBtn === "Prev"){
                return {disabled: self.currentPage === 1}
            }else{
                return {disabled: self.currentPage === self.maxPage}
            }
        }

        function clickPrevBtn () {
            var middleVal = (self.pageButtons[0] + self.pageButtons[self.pageButtons.length-1]) / 2
            if (self.currentPage < middleVal && !(self.pageButtons[0] === 1)){
                self.pageButtons = self.pageButtons.map(function(obj){return obj-1})
            }
            self.currentPage--;
            window.location.hash = '#' + self.currentPage
            self.selectPage = self.currentPage
        }

        function clickNextBtn () {
            var middleVal = (self.pageButtons[0] + self.pageButtons[self.pageButtons.length-1]) / 2
            if (self.currentPage > middleVal && !(self.pageButtons[self.pageButtons.length-1] === self.maxPage) ){
                self.pageButtons = self.pageButtons.map(function(obj){return obj+1})
            }
            self.currentPage++;
            window.location.hash = '#' + self.currentPage
            self.selectPage = self.currentPage
        }

        function goToThePage () {
            if (self.selectPage < 1 || self.selectPage > self.maxPage) {
                alert("Error!")
                self.selectPage = self.currentPage
            }else{
                var diff = self.selectPage - self.currentPage
                var action = (diff === 0)? 'nothing': (diff > 0) ? 'next': 'prev';
                diff = Math.abs(diff)
                if (action === 'next'){
                    for (var i = 0; i < diff; i++) clickNextBtn()
                }else if (action === 'prev'){
                    for (var i = 0; i < diff; i++) clickPrevBtn()
                }
                self.selectPage = self.currentPage
            }
        }

    }

})();
