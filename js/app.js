function isMobile() {
      try{ document.createEvent("TouchEvent"); return true; }
      catch(e){ return false; }
}

(function(){
    
    var datas = [{
        id:"parallax-introduce",
        title: "關於filenwind",
        img_url: "images/section/introduce.jpg",
    }, {
        id:"parallax-developer",
        img_url: "images/section/developer.jpg",
        title: "網頁程式設計師",
        description:{
            img_url:"images/section-gap/keyboard.jpg", 
            content: "主攻LAMP<br/>js使用jquery, angular<br/>css使用bootstrap, sematic-ui<br/>正在學習sass & node & react"
        }
        
    }, {
        id:"parallax-team-work",
        img_url: "images/section/team-work.jpg",
        title: "喜歡團隊合作",
        description:{
            img_url:"images/section-gap/team-work.jpg", 
            content: "喜歡跟同事討論，教學相長，三個臭皮匠，勝過一個諸葛亮"
        }
    }, {
        id:"parallax-new-and-interest",
        img_url: "images/section/new-and-interest.jpg",
        title: "喜歡新鮮事",
        description:{
            img_url:"images/section-gap/cube.png", 
            content: "喜歡學習新的東西，嘗試新事物"
        }
    }, {
        id:"parallax-love-music",
        img_url: "images/section/love-music.jpg",
        title: "喜歡音樂",
        description:{
            img_url:"images/section-gap/quarter-note.png", 
            content: "喜歡音樂，喜歡唱歌，即使唱不好"
            
        }
    }];
    
    
    var $backDrop = $("#back-drop");

    var Header = React.createClass({displayName: "Header",
        getInitialState: function() {
            return {datas:datas};
        },
        componentDidMount: function(){
            
            $('.navigator').localScroll(800);
            
            
            
        },
        render: function() {
            return (
                React.createElement("div", null, 
                    React.createElement("div", {className: "logo"}, 
                        "filenwind"
                    ), 
                    React.createElement("ul", {className: "navigator hidden-xs"}, 
                        this.state.datas.map(function (item) {
                            
                            return (
                                React.createElement("li", null, React.createElement("a", {href: "#"+item.id}, item.title))
                            );
                        })
                    )
                )
            );
        }
    });

    React.render(
        React.createElement(Header, null),
        $("#header").get(0)
    );



    var Sections = React.createClass({displayName: "Sections",
        
        getInitialState: function() {
            return {datas:datas};
        },
        componentDidMount: function(){
            
            
            
            
            var $introTitle = $(".intro-title");
            
            var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "50%"}});

                        // build scenes
                        new ScrollMagic.Scene({triggerElement: $(".parallax-section-gap").get(0)})
                                        .setTween($introTitle.get(0), {y: "80%", ease: Linear.easeNone, opacity: 0})
                                        .addTo(controller);
                                        
        
            
                $(".parallax-section").each(function(){
                    
                    var $this = $(this);
                    if(!isMobile()){
                        $this.parallax("50%", 0.1);
                    }else{
                        $(this).height($(window).height());
                    }
                        
                    
                });
                    
                
            
            
            var controller = new ScrollMagic.Controller();
            var leaveController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onLeave"}});
            
            $(".parallax-section-gap").each(function(){
                
                var $colRight = $(this).find(".col-right");
                
                TweenMax.set($colRight, {left: "+=300", opacity:0});
                var tween = new TimelineMax().to($colRight, 1, {
                    left: 0,
                    opacity: 1
                });
                
                var scene = new ScrollMagic.Scene({triggerElement: this})
                                        .setTween(tween)
                                        .addTo(controller);
                
                
                
                var tween = new TimelineMax().to($colRight, 1, {
                    left: "+=300",
                    opacity: 0
                });
                                        
                var scene = new ScrollMagic.Scene({triggerElement: this})
                    .setTween(tween)
                    .addTo(leaveController);
            });
            
            
        },
        render: function() {
            
            return (
                React.createElement("div", null, 
                    this.state.datas.map(function (item, i) {
                        
                        var gap = "";
                        if(item.description){
                            gap = React.createElement("div", {className: "parallax-section-gap row base-row"}, 
                                        React.createElement("div", {className: "col-md-3 col-sm-2"}), 
                                        React.createElement("div", {className: "col-md-3 col-sm-4 col-left"}, 
                                        
                                            React.createElement("h1", null, item.title), 
                                            React.createElement("p", {dangerouslySetInnerHTML: {__html: item.description.content}})
                                        
                                        ), 
                                        
                                        React.createElement("div", {className: "col-md-3 col-sm-4 col-right img-wraper"}, 
                                            React.createElement("span", {className: "middle-helper"}), React.createElement("img", {className: "img-rounded", src: item.description.img_url})
                                        ), 
                                        React.createElement("div", {className: "col-md-3 col-sm-2"})
                                        
                                    );  
                        }
                        
                        var introTitle = "";
                        if(!i){
                            introTitle = 
                                React.createElement("div", {className: "intro-title"}, 
                                    React.createElement("h1", null, item.title)
                                )
                            ;
                        }
                        
                        
                        return (
                            React.createElement("div", {id: item.id, className: "parallax-section-wrapper"}, 
                                gap, 
                                React.createElement("div", {className: "parallax-section", style: {backgroundImage: "url("+item.img_url+")"}}, 
                                    introTitle
                                )
                            )
                        )
                            
                    })
                )
                    
            );
        }
    });


    React.render(
        React.createElement(Sections, null),
        $("#sections").get(0)
    );
    



    var uses = [{
        title: "sass",
        img_url: "http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
        description: "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
        url:"http://sass-lang.com/",
    }, {
        title: "react & jsx",
        img_url: "http://facebook.github.io/react/img/logo.svg",
        description: "A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES",
        url:"http://facebook.github.io/react/",
    }, {
        title: "parallax scroll",
        img_url: "http://i.imgur.com/K74GwQl.png",
        description: "Static Background. This section has a background that moves slightly slower than the user scrolls. This is achieved by changing the top position of the background for every pixel the page is scrolled.",
        url:"http://ianlunn.co.uk/plugins/jquery-parallax/",
    }, {
        title: "bootstrap",
        img_url: "http://i.imgur.com/Myr4HGA.png",
        description: "Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",
        url:"http://getbootstrap.com/",
    }, {
        title: "ScrollMagic",
        img_url: "http://janpaepke.github.io/ScrollMagic/img/demo_tophat.png",
        description: "ScrollMagic helps you to easily react to the user's current scroll position.It's the perfect library for you, if you want to",
        url:"http://janpaepke.github.io/ScrollMagic/",
    }, {
        title: "jquery",
        img_url: "https://jquery.com/jquery-wp-content/themes/jquery/images/logo-jquery.png",
        description: "jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.",
        url:"https://jquery.com/",
    }];
    
    
    
    var Footer = React.createClass({displayName: "Footer",
        getInitialState: function() {
            return {uses:uses};
        },
        componentDidMount: function(){
            
            $("footer").find(".tool").each(function() {
                
                var $this = $(this);
                var $toolBox = $(this).siblings(".tool-box");
                var _tweenMax = TweenMax.to($toolBox.get(0), 0.5, {className: "+=show spotlight", paused:true});
                
                $this.data("_tweenMax", _tweenMax);
                
            });
            
            $("footer").find(".tool").click(function() {
                
                var $this = $(this);
                
                $backDrop.data("_tweenMax").play();
                
                
                $this.data("_tweenMax").play();
                
                if(!$this.data("bind-back-drop-click")){
                    $this.data("bind-back-drop-click", true);
                    $backDrop.click(function() {
                        
                        $this.data("_tweenMax").reverse();
                
                    });
                }
                
                
                
            });
            
        },
        render: function(){
            return(
                
                React.createElement("div", {className: "text-center"}, 
                    
                    React.createElement("h1", null, "This page is using"), 
                    
                    React.createElement("div", {className: "container-fluid"}, 
                        React.createElement("div", {className: "row text-center"}, 
                        
                            
                            this.state.uses.map(function(item) {
                                
                                    return (
                                    
                                    React.createElement("div", {className: "col-xs-10 col-md-2 center-block tool-wrapper"}, 
                                        React.createElement("a", {className: "tool btn btn-success btn-fill"}, item.title), 
                                        React.createElement("div", {className: "tool-box"}, 
                                            
                                            React.createElement("div", {className: "row base-row"}, 
                                                
                                                React.createElement("div", {className: "col-xs-10 col-md-3 center-block"}, 
                                                    React.createElement("h2", null, React.createElement("a", {href: item.url, target: "_blank"}, item.title)), 
                                                    React.createElement("p", {className: "text-left"}, item.description)
                                                ), 
                                                React.createElement("div", {className: "col-xs-10 col-md-3 center-block"}, 
                                                    React.createElement("img", {src: item.img_url})
                                                )
                                            )
                                            
                                        )
                                    )
                                  
                                    
                                );
                            })
                                        
                        
                        )
                    ), 
                    
                    React.createElement("h2", null, "Thanks for your visit."), 
                    React.createElement("p", null, "by filenwind")
                    
                    
                    
                )
                
            );
        }
    });
    
    React.render(
        React.createElement(Footer, null),
        $("footer").get(0)
    );
    
    
    $backDrop.data("_tweenMax", TweenMax.to($backDrop.get(0), 1, {className: "+=show", paused:true}))
    
    $backDrop.click(function() {
        $backDrop.data("_tweenMax").reverse();
    });
    
}());

