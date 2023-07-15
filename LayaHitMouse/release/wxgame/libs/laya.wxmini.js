"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _get(e,i,t){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,i,t){var n=_superPropBase(e,i);if(n){var o=Object.getOwnPropertyDescriptor(n,i);return o.get?o.get.call(t):o.value}})(e,i,t||e)}function _superPropBase(e,i){for(;!Object.prototype.hasOwnProperty.call(e,i)&&null!==(e=_getPrototypeOf(e)););return e}function _possibleConstructorReturn(e,i){return!i||"object"!==_typeof(i)&&"function"!=typeof i?_assertThisInitialized(e):i}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _inherits(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&_setPrototypeOf(e,i)}function _setPrototypeOf(e,i){return(_setPrototypeOf=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e})(e,i)}function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,i,t){return i&&_defineProperties(e.prototype,i),t&&_defineProperties(e,t),e}window.wxMiniGame=function(e,i){var t=function(){function MiniFileMgr(){_classCallCheck(this,MiniFileMgr)}return _createClass(MiniFileMgr,null,[{key:"isLocalNativeFile",value:function(e){for(var i=0,t=s.nativefiles.length;i<t;i++)if(-1!=e.indexOf(s.nativefiles[i]))return!0;return!1}},{key:"getFileInfo",value:function(e){var i=e,t=MiniFileMgr.fakeObj[i];return null==t?null:t}},{key:"read",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"utf8",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";t=""==a||-1==a.indexOf("http://")&&-1==a.indexOf("https://")?e:MiniFileMgr.getFileNativePath(e),t=i.URL.getAdptedFilePath(t),MiniFileMgr.fs.readFile({filePath:t,encoding:n,success:function(e){null!=o&&o.runWith([0,e])},fail:function(e){e&&""!=a?MiniFileMgr.downFiles(a,n,o,a,r,l):null!=o&&o.runWith([1])}})}},{key:"downFiles",value:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"utf8",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",r=!(arguments.length>6&&void 0!==arguments[6])||arguments[6];MiniFileMgr.wxdown({url:e,success:function(l){200===l.statusCode?MiniFileMgr.readFile(l.tempFilePath,i,t,n,o,a,r):403===l.statusCode?null!=t&&t.runWith([0,e]):null!=t&&t.runWith([1,l])},fail:function(e){null!=t&&t.runWith([1,e])}}).onProgressUpdate(function(e){null!=t&&t.runWith([2,e.progress])})}},{key:"readFile",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"utf8",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=(arguments.length>5&&void 0!==arguments[5]&&arguments[5],!(arguments.length>6&&void 0!==arguments[6])||arguments[6]);e=i.URL.getAdptedFilePath(e),MiniFileMgr.fs.readFile({filePath:e,encoding:t,success:function(i){(-1!=e.indexOf("http://")||-1!=e.indexOf("https://"))&&(s.autoCacheFile||a)?(null!=n&&n.runWith([0,i]),MiniFileMgr.copyFile(e,o,null,t,r)):null!=n&&n.runWith([0,i])},fail:function(e){e&&null!=n&&n.runWith([1,e])}})}},{key:"downOtherFiles",value:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];MiniFileMgr.wxdown({url:e,success:function(e){200===e.statusCode?(s.autoCacheFile||n)&&-1==t.indexOf("qlogo.cn")&&-1==t.indexOf(".php")?(null!=i&&i.runWith([0,e.tempFilePath]),MiniFileMgr.copyFile(e.tempFilePath,t,null,"",o)):null!=i&&i.runWith([0,e.tempFilePath]):null!=i&&i.runWith([1,e])},fail:function(e){null!=i&&i.runWith([1,e])}})}},{key:"downLoadFile",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"utf8";window.navigator.userAgent.indexOf("MiniGame")<0?i.Laya.loader.load(e,n):t==i.Loader.IMAGE||t==i.Loader.SOUND?MiniFileMgr.downOtherFiles(e,n,e,!0,!1):MiniFileMgr.downFiles(e,o,n,e,!0,t,!1)}},{key:"copyFile",value:function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=e.split("/"),l=r[r.length-1],u=t,d=MiniFileMgr.getFileInfo(t),c=MiniFileMgr.getFileNativePath(l);MiniFileMgr.fakeObj[u]={md5:l,readyUrl:t,size:0,times:i.Browser.now(),encoding:o};var f=MiniFileMgr.getCacheUseSize();d?d.readyUrl!=t?MiniFileMgr.fs.getFileInfo({filePath:e,success:function(i){a&&f+4194304+i.size>=52428800&&(i.size>s.minClearSize&&(s.minClearSize=i.size),MiniFileMgr.onClearCacheRes()),MiniFileMgr.deleteFile(e,t,n,o,i.size)},fail:function(e){null!=n&&n.runWith([1,e])}}):null!=n&&n.runWith([0]):MiniFileMgr.fs.getFileInfo({filePath:e,success:function(i){a&&f+4194304+i.size>=52428800&&(i.size>s.minClearSize&&(s.minClearSize=i.size),MiniFileMgr.onClearCacheRes()),MiniFileMgr.fs.copyFile({srcPath:e,destPath:c,success:function(e){MiniFileMgr.onSaveFile(t,l,!0,o,n,i.size)},fail:function(e){null!=n&&n.runWith([1,e])}})},fail:function(e){null!=n&&n.runWith([1,e])}})}},{key:"onClearCacheRes",value:function(){var e=s.minClearSize,i=[];for(var t in MiniFileMgr.filesListObj)"fileUsedSize"!=t&&i.push(MiniFileMgr.filesListObj[t]);MiniFileMgr.sortOn(i,"times",MiniFileMgr.NUMERIC);for(var n=0,o=1,a=i.length;o<a;o++){var r=i[o];if(n>=e)break;n+=r.size,MiniFileMgr.deleteFile("",r.readyUrl)}}},{key:"sortOn",value:function(e,i){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return t==MiniFileMgr.NUMERIC?e.sort(function(e,t){return e[i]-t[i]}):t==(MiniFileMgr.NUMERIC|MiniFileMgr.DESCENDING)?e.sort(function(e,t){return t[i]-e[i]}):e.sort(function(e,t){return e[i]-t[i]})}},{key:"getFileNativePath",value:function(e){return MiniFileMgr.fileNativeDir+"/"+e}},{key:"deleteFile",value:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=MiniFileMgr.getFileInfo(i),r=MiniFileMgr.getFileNativePath(a.md5),l=""!=e;MiniFileMgr.onSaveFile(i,e,l,n,t,o),MiniFileMgr.fs.unlink({filePath:r,success:function(i){if(""!=e){var n=MiniFileMgr.getFileNativePath(e);MiniFileMgr.fs.copyFile({srcPath:e,destPath:n,success:function(e){},fail:function(e){null!=t&&t.runWith([1,e])}})}},fail:function(e){}})}},{key:"deleteAll",value:function(){var e=[];for(var i in MiniFileMgr.filesListObj)"fileUsedSize"!=i&&e.push(MiniFileMgr.filesListObj[i]);for(var t=1,n=e.length;t<n;t++){var o=e[t];MiniFileMgr.deleteFile("",o.readyUrl)}MiniFileMgr.filesListObj&&MiniFileMgr.filesListObj.fileUsedSize&&(MiniFileMgr.filesListObj.fileUsedSize=0),MiniFileMgr.writeFilesList("",JSON.stringify({}),!1)}},{key:"onSaveFile",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,l=e;if(null==MiniFileMgr.filesListObj.fileUsedSize&&(MiniFileMgr.filesListObj.fileUsedSize=0),n){MiniFileMgr.getFileNativePath(t);MiniFileMgr.filesListObj[l]={md5:t,readyUrl:e,size:r,times:i.Browser.now(),encoding:o},MiniFileMgr.filesListObj.fileUsedSize=parseInt(MiniFileMgr.filesListObj.fileUsedSize)+r,MiniFileMgr.writeFilesList(l,JSON.stringify(MiniFileMgr.filesListObj),!0),null!=a&&a.runWith([0])}else if(MiniFileMgr.filesListObj[l]){var s=parseInt(MiniFileMgr.filesListObj[l].size);MiniFileMgr.filesListObj.fileUsedSize=parseInt(MiniFileMgr.filesListObj.fileUsedSize)-s,delete MiniFileMgr.filesListObj[l],MiniFileMgr.writeFilesList(l,JSON.stringify(MiniFileMgr.filesListObj),!1),null!=a&&a.runWith([0])}}},{key:"writeFilesList",value:function(e,i,t){var n=MiniFileMgr.fileNativeDir+"/"+MiniFileMgr.fileListName;MiniFileMgr.fs.writeFile({filePath:n,encoding:"utf8",data:i,success:function(e){},fail:function(e){}}),!s.isZiYu&&s.isPosMsgYu&&s.window.wx.postMessage({url:e,data:MiniFileMgr.filesListObj[e],isLoad:"filenative",isAdd:t})}},{key:"getCacheUseSize",value:function(){return MiniFileMgr.filesListObj&&MiniFileMgr.filesListObj.fileUsedSize?MiniFileMgr.filesListObj.fileUsedSize:0}},{key:"existDir",value:function(e,i){MiniFileMgr.fs.mkdir({dirPath:e,success:function(e){null!=i&&i.runWith([0,{data:JSON.stringify({})}])},fail:function(e){-1!=e.errMsg.indexOf("file already exists")?MiniFileMgr.readSync(MiniFileMgr.fileListName,"utf8",i):null!=i&&i.runWith([1,e])}})}},{key:"readSync",value:function(e){var i,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"utf8",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=(arguments.length>3&&void 0!==arguments[3]&&arguments[3],MiniFileMgr.getFileNativePath(e));try{i=MiniFileMgr.fs.readFileSync(o,t),null!=n&&n.runWith([0,{data:i}])}catch(e){null!=n&&n.runWith([1])}}},{key:"setNativeFileDir",value:function(e){MiniFileMgr.fileNativeDir=s.window.wx.env.USER_DATA_PATH+e}}]),MiniFileMgr}();t.fs=window.wx.getFileSystemManager(),t.wxdown=window.wx.downloadFile,t.filesListObj={},t.fakeObj={},t.fileListName="layaairfiles.txt",t.ziyuFileData={},t.ziyuFileTextureData={},t.loadPath="",t.DESCENDING=2,t.NUMERIC=16;var n=function(e){function MiniSoundChannel(e,i){var t;return _classCallCheck(this,MiniSoundChannel),(t=_possibleConstructorReturn(this,_getPrototypeOf(MiniSoundChannel).call(this)))._audio=e,t._miniSound=i,t._onEnd=MiniSoundChannel.bindToThis(t.__onEnd,_assertThisInitialized(t)),e.onEnded(t._onEnd),t}return _inherits(MiniSoundChannel,i.SoundChannel),_createClass(MiniSoundChannel,[{key:"__onEnd",value:function(){if(1==this.loops)return this.completeHandler&&(i.Laya.systemTimer.once(10,this,this.__runComplete,[this.completeHandler],!1),this.completeHandler=null),this.stop(),void this.event(i.Event.COMPLETE);this.loops>0&&this.loops--,this.startTime=0,this.play()}},{key:"play",value:function(){this.isStopped=!1,i.SoundManager.addChannel(this),this._audio.play()}},{key:"stop",value:function(){this.isStopped=!0,i.SoundManager.removeChannel(this),this.completeHandler=null,this._audio&&(this._audio.stop(),this.loop||(this._audio.offEnded(null),this._miniSound.dispose(),this._audio=null,this._miniSound=null,this._onEnd=null))}},{key:"pause",value:function(){this.isStopped=!0,this._audio.pause()}},{key:"resume",value:function(){this._audio&&(this.isStopped=!1,i.SoundManager.addChannel(this),this._audio.play())}},{key:"startTime",set:function(e){this._audio&&(this._audio.startTime=e)}},{key:"autoplay",set:function(e){this._audio.autoplay=e},get:function(){return this._audio.autoplay}},{key:"position",get:function(){return this._audio?this._audio.currentTime:0}},{key:"duration",get:function(){return this._audio?this._audio.duration:0}},{key:"loop",get:function(){return this._audio.loop},set:function(e){this._audio.loop=e}},{key:"volume",set:function(e){this._audio&&(this._audio.volume=e)},get:function(){return this._audio?this._audio.volume:1}}],[{key:"bindToThis",value:function(e,i){return e.bind(i)}}]),MiniSoundChannel}(),o=function(e){function MiniSound(){var e;return _classCallCheck(this,MiniSound),(e=_possibleConstructorReturn(this,_getPrototypeOf(MiniSound).call(this))).loaded=!1,e}return _inherits(MiniSound,i.EventDispatcher),_createClass(MiniSound,[{key:"load",value:function(e){if(t.isLocalNativeFile(e)){if(-1!=e.indexOf("http://")||-1!=e.indexOf("https://"))if(""!=t.loadPath)e=e.split(t.loadPath)[1];else{var n=""!=i.URL.rootPath?i.URL.rootPath:i.URL._basePath;""!=n&&(e=e.split(n)[1])}}else e=i.URL.formatURL(e);if(this.url=e,this.readyUrl=e,MiniSound._audioCache[this.readyUrl])this.event(i.Event.COMPLETE);else if(s.autoCacheFile&&t.getFileInfo(e))this.onDownLoadCallBack(e,0);else if(s.autoCacheFile)if(t.isLocalNativeFile(e)){var o=e;if(""!=(n=""!=i.URL.rootPath?i.URL.rootPath:i.URL._basePath)&&(e=e.split(n)[1]),e||(e=o),s.subNativeFiles&&0==s.subNativeheads.length)for(var a in s.subNativeFiles){var r=s.subNativeFiles[a];s.subNativeheads=s.subNativeheads.concat(r);for(var l=0;l<r.length;l++)s.subMaps[r[l]]=a+"/"+r[l]}if(s.subNativeFiles&&-1!=e.indexOf("/")){var u=e.split("/")[0]+"/";if(u&&-1!=s.subNativeheads.indexOf(u)){var d=s.subMaps[u];e=e.replace(u,d)}}this.onDownLoadCallBack(e,0)}else!t.isLocalNativeFile(e)&&-1==e.indexOf("http://")&&-1==e.indexOf("https://")||-1!=e.indexOf("http://usr/")?this.onDownLoadCallBack(e,0):t.downOtherFiles(e,i.Handler.create(this,this.onDownLoadCallBack,[e]),e);else this.onDownLoadCallBack(e,0)}},{key:"onDownLoadCallBack",value:function(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(n)this.event(i.Event.ERROR);else{var a;if(s.autoCacheFile){if(o)a=o;else if(t.isLocalNativeFile(e)){var r=""!=i.URL.rootPath?i.URL.rootPath:i.URL._basePath,l=e;""==r||-1==e.indexOf("http://")&&-1==e.indexOf("https://")||(a=e.split(r)[1]),a||(a=l)}else{var u=t.getFileInfo(e);if(u&&u.md5){var d=u.md5;a=t.getFileNativePath(d)}else a=e}this._sound=MiniSound._createSound(),this._sound.src=this.url=a}else this._sound=MiniSound._createSound(),this._sound.src=this.url=e;this._sound.onCanplay(MiniSound.bindToThis(this.onCanPlay,this)),this._sound.onError(MiniSound.bindToThis(this.onError,this))}}},{key:"onError",value:function(e){try{console.log("-----1---------------minisound-----id:"+MiniSound._id),console.log(e)}catch(e){console.log("-----2---------------minisound-----id:"+MiniSound._id),console.log(e)}this.event(i.Event.ERROR),this._sound.offError(null)}},{key:"onCanPlay",value:function(){this.loaded=!0,this.event(i.Event.COMPLETE),this._sound.offCanplay(null)}},{key:"play",value:function(){var e,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(this.url==i.SoundManager._bgMusic?(MiniSound._musicAudio||(MiniSound._musicAudio=MiniSound._createSound()),e=MiniSound._musicAudio):e=MiniSound._audioCache[this.readyUrl]?MiniSound._audioCache[this.readyUrl]._sound:MiniSound._createSound(),!e)return null;if(s.autoCacheFile&&t.getFileInfo(this.url)){var r=t.getFileInfo(this.url).md5;e.src=this.url=t.getFileNativePath(r)}else e.src=this.url;var l=new n(e,this);return l.url=this.url,l.loops=a,l.loop=0===a,l.startTime=o,l.play(),i.SoundManager.addChannel(l),l}},{key:"dispose",value:function(){var e=MiniSound._audioCache[this.readyUrl];e&&(e.src="",e._sound&&(e._sound.destroy(),e._sound=null,e=null),delete MiniSound._audioCache[this.readyUrl]),this._sound&&(this._sound.destroy(),this._sound=null,this.readyUrl=this.url=null)}},{key:"duration",get:function(){return this._sound.duration}}],[{key:"_createSound",value:function(){return MiniSound._id++,s.window.wx.createInnerAudioContext()}},{key:"bindToThis",value:function(e,i){return e.bind(i)}}]),MiniSound}();o._id=0,o._audioCache={};var a=function(){function MiniInput(){_classCallCheck(this,MiniInput)}return _createClass(MiniInput,null,[{key:"_createInputElement",value:function(){i.Input._initInput(i.Input.area=i.Browser.createElement("textarea")),i.Input._initInput(i.Input.input=i.Browser.createElement("input")),i.Input.inputContainer=i.Browser.createElement("div"),i.Input.inputContainer.style.position="absolute",i.Input.inputContainer.style.zIndex=1e5,i.Browser.container.appendChild(i.Input.inputContainer),i.Laya.stage.on("resize",null,MiniInput._onStageResize),s.window.wx.onWindowResize&&s.window.wx.onWindowResize(function(e){}),i.SoundManager._soundClass=o,i.SoundManager._musicClass=o;var e=s.systemInfo.model,t=s.systemInfo.system;-1!=e.indexOf("iPhone")&&(i.Browser.onIPhone=!0,i.Browser.onIOS=!0,i.Browser.onIPad=!0,i.Browser.onAndroid=!1),-1==t.indexOf("Android")&&-1==t.indexOf("Adr")||(i.Browser.onAndroid=!0,i.Browser.onIPhone=!1,i.Browser.onIOS=!1,i.Browser.onIPad=!1)}},{key:"_onStageResize",value:function(){i.Laya.stage._canvasTransform.identity().scale(i.Browser.width/i.Render.canvas.width/i.Browser.pixelRatio,i.Browser.height/i.Render.canvas.height/i.Browser.pixelRatio)}},{key:"wxinputFocus",value:function(e){var t=i.Input.inputElement.target;t&&!t.editable||(s.window.wx.offKeyboardConfirm(),s.window.wx.offKeyboardInput(),s.window.wx.showKeyboard({defaultValue:t.text,maxLength:t.maxChars,multiple:t.multiline,confirmHold:!0,confirmType:t.confirmType||"done",success:function(e){},fail:function(e){}}),s.window.wx.onKeyboardConfirm(function(e){var n=e?e.value:"";t._restrictPattern&&(n=n.replace(/\u2006|\x27/g,""),t._restrictPattern.test(n)&&(n=n.replace(t._restrictPattern,""))),t.text=n,t.event(i.Event.INPUT),MiniInput.inputEnter(),t.event("confirm")}),s.window.wx.onKeyboardInput(function(e){var n=e?e.value:"";t.multiline||-1==n.indexOf("\n")?(t._restrictPattern&&(n=n.replace(/\u2006|\x27/g,""),t._restrictPattern.test(n)&&(n=n.replace(t._restrictPattern,""))),t.text=n,t.event(i.Event.INPUT)):MiniInput.inputEnter()}))}},{key:"inputEnter",value:function(){i.Input.inputElement.target.focus=!1}},{key:"wxinputblur",value:function(){MiniInput.hideKeyboard()}},{key:"hideKeyboard",value:function(){s.window.wx.offKeyboardConfirm(),s.window.wx.offKeyboardInput(),s.window.wx.hideKeyboard({success:function(e){console.log("隐藏键盘")},fail:function(e){console.log("隐藏键盘出错:"+(e?e.errMsg:""))}})}}]),MiniInput}(),r=function(e){function MiniLoader(){return _classCallCheck(this,MiniLoader),_possibleConstructorReturn(this,_getPrototypeOf(MiniLoader).call(this))}return _inherits(MiniLoader,i.EventDispatcher),_createClass(MiniLoader,[{key:"_loadResourceFilter",value:function(e,n){if(-1==n.indexOf(s.window.wx.env.USER_DATA_PATH)&&(-1!=n.indexOf("http://")||-1!=n.indexOf("https://")))if(""!=t.loadPath)n=n.split(t.loadPath)[1];else{var o=""!=i.URL.rootPath?i.URL.rootPath:i.URL._basePath,a=n;""!=o&&(n=n.split(o)[1]),n||(n=a)}if(s.subNativeFiles&&0==s.subNativeheads.length)for(var r in s.subNativeFiles){var l=s.subNativeFiles[r];s.subNativeheads=s.subNativeheads.concat(l);for(var u=0;u<l.length;u++)s.subMaps[l[u]]=r+"/"+l[u]}if(s.subNativeFiles&&-1!=n.indexOf("/")){var d=n.split("/")[0]+"/";if(d&&-1!=s.subNativeheads.indexOf(d)){var c=s.subMaps[d];n=n.replace(d,c)}}switch(e){case i.Loader.IMAGE:case"htmlimage":case"nativeimage":MiniLoader._transformImgUrl(n,e,this);break;case i.Loader.SOUND:this._loadSound(n);break;default:this._loadResource(e,n)}}},{key:"_loadSound",value:function(e){var n;if(t.isLocalNativeFile(e)){var o=""!=i.URL.rootPath?i.URL.rootPath:i.URL._basePath,a=e;""==o||-1==e.indexOf("http://")&&-1==e.indexOf("https://")||(n=e.split(o)[1]),n||(n=a),MiniLoader.onDownLoadCallBack(e,this,0)}else{var r=i.URL.formatURL(e);!t.isLocalNativeFile(e)&&-1==r.indexOf("http://")&&-1==r.indexOf("https://")||-1!=r.indexOf(s.window.wx.env.USER_DATA_PATH)?MiniLoader.onDownLoadCallBack(e,this,0):t.downOtherFiles(encodeURI(r),i.Handler.create(MiniLoader,MiniLoader.onDownLoadCallBack,[r,this]),r)}}},{key:"_loadHttpRequestWhat",value:function(e,n){var o=s.getUrlEncode(e,n);if(i.Loader.preLoadedMap[e])this.onLoaded(i.Loader.preLoadedMap[e]);else{var a=i.URL.formatURL(e);if(t.isLocalNativeFile(e)||t.getFileInfo(a)||-1!=e.indexOf(s.window.wx.env.USER_DATA_PATH)||-1==a.indexOf("http://")&&-1==a.indexOf("https://")||s.AutoCacheDownFile){var r=t.getFileInfo(i.URL.formatURL(e));r?(r.encoding=null==r.encoding?"utf8":r.encoding,t.readFile(t.getFileNativePath(r.md5),o,new i.Handler(MiniLoader,MiniLoader.onReadNativeCallBack,[e,n,this]),e)):"image"==this.type||"htmlimage"==this.type?this._transformUrl(e,n):n!=i.Loader.IMAGE&&(-1==a.indexOf("http://")&&-1==a.indexOf("https://")||t.isLocalNativeFile(e))?t.readFile(e,o,new i.Handler(MiniLoader,MiniLoader.onReadNativeCallBack,[e,n,this]),e):t.downFiles(a,o,new i.Handler(MiniLoader,MiniLoader.onReadNativeCallBack,[e,n,this]),a,!0)}else this._loadHttpRequest(a,n,this,this.onLoaded,this,this.onProgress,this,this.onError)}}}],[{key:"onDownLoadCallBack",value:function(e,n,o){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(o)n.event(i.Event.ERROR,"Load sound failed");else{var r;if(s.autoCacheFile)if(a)r=a;else if(t.isLocalNativeFile(e)){var l=""!=i.URL.rootPath?i.URL.rootPath:i.URL._basePath,u=e;""==l||-1==e.indexOf("http://")&&-1==e.indexOf("https://")||(r=e.split(l)[1]),r||(r=u)}else{var d=t.getFileInfo(e);if(d&&d.md5){var c=d.md5;r=t.getFileNativePath(c)}else r=e}e=r;var f=new i.SoundManager._soundClass;f.load(e),n.onLoaded(f)}}},{key:"bindToThis",value:function(e,i){return e.bind(i)}},{key:"onReadNativeCallBack",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;a?1==a&&o._loadHttpRequest(e,n,o,o.onLoaded,o,o.onProgress,o,o.onError):(t=n==i.Loader.JSON||n==i.Loader.ATLAS||n==i.Loader.PREFAB||n==i.Loader.PLF?s.getJson(r.data):n==i.Loader.XML?i.Utils.parseXMLFromString(r.data):r.data,!s.isZiYu&&s.isPosMsgYu&&n!=i.Loader.BUFFER&&s.window.wx.postMessage({url:e,data:t,isLoad:"filedata"}),o.onLoaded(t))}},{key:"_transformImgUrl",value:function(e,n,o){if(s.isZiYu)o._loadImage(e,!1);else if(t.isLocalNativeFile(e))o._loadImage(e,!1);else if(t.isLocalNativeFile(e)||t.getFileInfo(i.URL.formatURL(e)))o._loadImage(e,!1);else{var a=i.URL.formatURL(e);-1!=e.indexOf(s.window.wx.env.USER_DATA_PATH)||-1==a.indexOf("http://")&&-1==a.indexOf("https://")?o._loadImage(e,!1):s.isZiYu?o._loadImage(e,!1):t.downOtherFiles(a,new i.Handler(MiniLoader,MiniLoader.onDownImgCallBack,[e,o]),a)}}},{key:"onDownImgCallBack",value:function(e,i,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";t?i.onError(null):MiniLoader.onCreateImage(e,i,!1,n)}},{key:"onCreateImage",value:function(e,n){var o,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(s.autoCacheFile)if(a)if(s.isZiYu){var l=i.URL.formatURL(e);o=t.ziyuFileTextureData[l]?t.ziyuFileTextureData[l]:e}else o=e;else if(""!=r)o=r;else{var u=t.getFileInfo(e).md5;o=t.getFileNativePath(u)}else o=a?e:r;n._loadImage(o,!1)}}]),MiniLoader}(),l=function(){function MiniLocalStorage(){_classCallCheck(this,MiniLocalStorage)}return _createClass(MiniLocalStorage,null,[{key:"__init__",value:function(){MiniLocalStorage.items=MiniLocalStorage}},{key:"setItem",value:function(e,i){try{s.window.wx.setStorageSync(e,i)}catch(t){s.window.wx.setStorage({key:e,data:i})}}},{key:"getItem",value:function(e){return s.window.wx.getStorageSync(e)}},{key:"setJSON",value:function(e,i){MiniLocalStorage.setItem(e,i)}},{key:"getJSON",value:function(e){return MiniLocalStorage.getItem(e)}},{key:"removeItem",value:function(e){s.window.wx.removeStorageSync(e)}},{key:"clear",value:function(){s.window.wx.clearStorageSync()}},{key:"getStorageInfoSync",value:function(){try{var e=s.window.wx.getStorageInfoSync();return console.log(e.keys),console.log(e.currentSize),console.log(e.limitSize),e}catch(e){}return null}}]),MiniLocalStorage}();l.support=!0;var s=function(){function MiniAdpter(){_classCallCheck(this,MiniAdpter)}return _createClass(MiniAdpter,null,[{key:"getJson",value:function(e){return JSON.parse(e)}},{key:"enable",value:function(){MiniAdpter.init(i.Laya.isWXPosMsg,i.Laya.isWXOpenDataContext)}},{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];MiniAdpter._inited||(MiniAdpter._inited=!0,MiniAdpter.window=window,MiniAdpter.window.hasOwnProperty("wx")&&(MiniAdpter.window.navigator.userAgent.indexOf("MiniGame")<0||(MiniAdpter.isZiYu=n,MiniAdpter.isPosMsgYu=e,MiniAdpter.EnvConfig={},MiniAdpter.isZiYu||(t.setNativeFileDir("/layaairGame"),t.existDir(t.fileNativeDir,i.Handler.create(MiniAdpter,MiniAdpter.onMkdirCallBack))),MiniAdpter.systemInfo=MiniAdpter.window.wx.getSystemInfoSync(),MiniAdpter.window.focus=function(){},i.Laya._getUrlPath=function(){return""},MiniAdpter.window.logtime=function(e){},MiniAdpter.window.alertTimeLog=function(e){},MiniAdpter.window.resetShareInfo=function(){},MiniAdpter.window.CanvasRenderingContext2D=function(){},MiniAdpter.window.CanvasRenderingContext2D.prototype=MiniAdpter.window.wx.createCanvas().getContext("2d").__proto__,MiniAdpter.window.document.body.appendChild=function(){},MiniAdpter.EnvConfig.pixelRatioInt=0,i.Browser._pixelRatio=MiniAdpter.pixelRatio(),MiniAdpter._preCreateElement=i.Browser.createElement,i.Browser.createElement=MiniAdpter.createElement,i.RunDriver.createShaderCondition=MiniAdpter.createShaderCondition,i.Utils.parseXMLFromString=MiniAdpter.parseXMLFromString,i.Input._createInputElement=a._createInputElement,i.Loader.prototype._loadResourceFilter=r.prototype._loadResourceFilter,i.Loader.prototype._loadSound=r.prototype._loadSound,i.Loader.prototype._loadHttpRequestWhat=r.prototype._loadHttpRequestWhat,i.LocalStorage._baseClass=l,l.__init__(),MiniAdpter.window.wx.onMessage&&MiniAdpter.window.wx.onMessage(MiniAdpter._onMessage))))}},{key:"_onMessage",value:function(e){switch(e.type){case"changeMatrix":i.Laya.stage.transform.identity(),i.Laya.stage._width=e.w,i.Laya.stage._height=e.h,i.Laya.stage._canvasTransform=new i.Matrix(e.a,e.b,e.c,e.d,e.tx,e.ty);break;case"display":i.Laya.stage.frameRate=e.rate||i.Stage.FRAME_FAST;break;case"undisplay":i.Laya.stage.frameRate=i.Stage.FRAME_SLEEP}"opendatacontext"==e.isLoad?e.url&&(t.ziyuFileData[e.url]=e.atlasdata,t.ziyuFileTextureData[e.imgReadyUrl]=e.imgNativeUrl):"openJsondatacontext"==e.isLoad?e.url&&(t.ziyuFileData[e.url]=e.atlasdata):"openJsondatacontextPic"==e.isLoad&&(t.ziyuFileTextureData[e.imgReadyUrl]=e.imgNativeUrl)}},{key:"getUrlEncode",value:function(e,i){return"arraybuffer"==i?"":"utf8"}},{key:"downLoadFile",value:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"utf8";t.getFileInfo(e)?null!=n&&n.runWith([0]):t.downLoadFile(e,i,n,o)}},{key:"remove",value:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t.deleteFile("",e,i,"",0)}},{key:"removeAll",value:function(){t.deleteAll()}},{key:"hasNativeFile",value:function(e){return t.isLocalNativeFile(e)}},{key:"getFileInfo",value:function(e){return t.getFileInfo(e)}},{key:"getFileList",value:function(){return t.filesListObj}},{key:"exitMiniProgram",value:function(){MiniAdpter.window.wx.exitMiniProgram()}},{key:"onMkdirCallBack",value:function(e,i){e||(t.filesListObj=JSON.parse(i.data)),t.fakeObj=t.filesListObj}},{key:"pixelRatio",value:function(){if(!MiniAdpter.EnvConfig.pixelRatioInt)try{return MiniAdpter.EnvConfig.pixelRatioInt=MiniAdpter.systemInfo.pixelRatio,MiniAdpter.systemInfo.pixelRatio}catch(e){}return MiniAdpter.EnvConfig.pixelRatioInt}},{key:"createElement",value:function(e){var i;if("canvas"==e)return 1==MiniAdpter.idx?MiniAdpter.isZiYu?(i=MiniAdpter.window.sharedCanvas).style={}:i=MiniAdpter.window.canvas:i=MiniAdpter.window.wx.createCanvas(),MiniAdpter.idx++,i;if("textarea"==e||"input"==e)return MiniAdpter.onCreateInput(e);if("div"==e){var t=MiniAdpter._preCreateElement(e);return t.contains=function(e){return null},t.removeChild=function(e){},t}return MiniAdpter._preCreateElement(e)}},{key:"onCreateInput",value:function(e){var i=MiniAdpter._preCreateElement(e);return i.focus=a.wxinputFocus,i.blur=a.wxinputblur,i.style={},i.value=0,i.parentElement={},i.placeholder={},i.type={},i.setColor=function(e){},i.setType=function(e){},i.setFontFace=function(e){},i.addEventListener=function(e){},i.contains=function(e){return null},i.removeChild=function(e){},i}},{key:"createShaderCondition",value:function(e){return function(){return this[e.replace("this.","")]}}},{key:"sendAtlasToOpenDataContext",value:function(e){if(!MiniAdpter.isZiYu){var t=i.Loader.getRes(i.URL.formatURL(e));if(!t)throw"传递的url没有获取到对应的图集数据信息，请确保图集已经过！";t.meta.image.split(",");if(t.meta&&t.meta.image)for(var n=t.meta.image.split(","),o=e.indexOf("/")>=0?"/":"\\",a=e.lastIndexOf(o),r=a>=0?e.substr(0,a+1):"",l=0,s=n.length;l<s;l++)n[l]=r+n[l];else n=[e.replace(".json",".png")];for(l=0;l<n.length;l++){var u=n[l];MiniAdpter.postInfoToContext(i.Laya.URL.formatURL(e),i.Laya.URL.formatURL(u),t)}}}},{key:"postInfoToContext",value:function(e,n,o){var a={frames:o.frames,meta:o.meta},r=n,l=t.getFileInfo(i.URL.formatURL(n));if(l)var s=l.md5,u=t.getFileNativePath(s);else u=r;if(!u)throw"获取图集的磁盘url路径不存在！";MiniAdpter.window.wx.postMessage({url:e,atlasdata:a,imgNativeUrl:u,imgReadyUrl:r,isLoad:"opendatacontext"})}},{key:"sendSinglePicToOpenDataContext",value:function(e){var n=i.URL.formatURL(e),o=t.getFileInfo(n);if(o){var a=o.md5,r=t.getFileNativePath(a);e=n}else r=e;if(!r)throw"获取图集的磁盘url路径不存在！";e=i.Laya.URL.formatURL(e),MiniAdpter.window.wx.postMessage({url:e,imgNativeUrl:r,imgReadyUrl:e,isLoad:"openJsondatacontextPic"})}},{key:"sendJsonDataToDataContext",value:function(e){if(!MiniAdpter.isZiYu){e=i.Laya.URL.formatURL(e);var t=i.Loader.getRes(e);if(!t)throw"传递的url没有获取到对应的图集数据信息，请确保图集已经过！";MiniAdpter.window.wx.postMessage({url:e,atlasdata:t,isLoad:"openJsondatacontext"})}}}]),MiniAdpter}();s._inited=!1,s.autoCacheFile=!0,s.minClearSize=5242880,s.nativefiles=["layaNativeDir","wxlocal"],s.subNativeFiles=[],s.subNativeheads=[],s.subMaps=[],s.AutoCacheDownFile=!1,s.parseXMLFromString=function(e){var i;e=e.replace(/>\s+</g,"><");try{i=(new s.window.Parser.DOMParser).parseFromString(e,"text/xml")}catch(e){throw"需要引入xml解析库文件"}return i},s.idx=1;var u=function(e){function MiniAccelerator(){return _classCallCheck(this,MiniAccelerator),_possibleConstructorReturn(this,_getPrototypeOf(MiniAccelerator).call(this))}return _inherits(MiniAccelerator,i.EventDispatcher),_createClass(MiniAccelerator,[{key:"on",value:function(e,i,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return _get(_getPrototypeOf(MiniAccelerator.prototype),"on",this).call(this,e,i,t,n),MiniAccelerator.startListen(this.onDeviceOrientationChange),this}},{key:"off",value:function(e,i,t){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return this.hasListener(e)||MiniAccelerator.stopListen(),_get(_getPrototypeOf(MiniAccelerator.prototype),"off",this).call(this,e,i,t,n)}}],[{key:"__init__",value:function(){try{var e;if(!(e=i.Accelerator))return;e.prototype.on=MiniAccelerator.prototype.on,e.prototype.off=MiniAccelerator.prototype.off}catch(e){}}},{key:"startListen",value:function(e){if(MiniAccelerator._callBack=e,!MiniAccelerator._isListening){MiniAccelerator._isListening=!0;try{s.window.wx.onAccelerometerChange(MiniAccelerator.onAccelerometerChange)}catch(e){}}}},{key:"stopListen",value:function(){MiniAccelerator._isListening=!1;try{s.window.wx.stopAccelerometer({})}catch(e){}}},{key:"onAccelerometerChange",value:function(e){var i;(i={}).acceleration=e,i.accelerationIncludingGravity=e,i.rotationRate={},null!=MiniAccelerator._callBack&&MiniAccelerator._callBack(i)}}]),MiniAccelerator}();u._isListening=!1;var d=function(){function MiniImage(){_classCallCheck(this,MiniImage)}return _createClass(MiniImage,[{key:"_loadImage",value:function(e){if(s.isZiYu)MiniImage.onCreateImage(e,this,!0);else{var n;if(t.isLocalNativeFile(e)){if(-1==e.indexOf(s.window.wx.env.USER_DATA_PATH)&&(-1!=e.indexOf("http://")||-1!=e.indexOf("https://")))if(""!=t.loadPath)e=e.split(t.loadPath)[1];else{var o=""!=i.URL.rootPath?i.URL.rootPath:i.URL._basePath,a=e;""!=o&&(e=e.split(o)[1]),e||(e=a)}if(s.subNativeFiles&&0==s.subNativeheads.length)for(var r in s.subNativeFiles){var l=s.subNativeFiles[r];s.subNativeheads=s.subNativeheads.concat(l);for(var u=0;u<l.length;u++)s.subMaps[l[u]]=r+"/"+l[u]}if(s.subNativeFiles&&-1!=e.indexOf("/")){var d=e.split("/")[0]+"/";if(d&&-1!=s.subNativeheads.indexOf(d)){var c=s.subMaps[d];e=e.replace(d,c)}}}else n=!0,e=i.URL.formatURL(e);t.getFileInfo(e)?MiniImage.onCreateImage(e,this,!n):-1!=e.indexOf(s.window.wx.env.USER_DATA_PATH)||-1==e.indexOf("http://")&&-1==e.indexOf("https://")?MiniImage.onCreateImage(e,this,!0):s.isZiYu?MiniImage.onCreateImage(e,this,!0):t.downOtherFiles(e,new i.Handler(MiniImage,MiniImage.onDownImgCallBack,[e,this]),e)}}}],[{key:"onDownImgCallBack",value:function(e,i,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";t?i.onError(null):MiniImage.onCreateImage(e,i,!1,n)}},{key:"onCreateImage",value:function(e,n){var o,a,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(s.autoCacheFile)if(r)if(s.isZiYu){var u=i.URL.formatURL(e);o=t.ziyuFileTextureData[u]?t.ziyuFileTextureData[u]:e}else o=e;else if(""!=l)o=l;else{var d=t.getFileInfo(e).md5;o=t.getFileNativePath(d)}else o=r?e:l;function clear(){var e=n._imgCache[o];e&&(e.onload=null,e.onerror=null,delete n._imgCache[o])}null==n._imgCache&&(n._imgCache={});var c=function(){clear(),delete t.fakeObj[e],delete t.filesListObj[e],n.event(i.Event.ERROR,"Load image failed")};if("nativeimage"==n._type){var f=function(){clear(),n.onLoaded(a)};(a=new i.Browser.window.Image).crossOrigin="",a.onload=f,a.onerror=c,a.src=o,n._imgCache[o]=a}else{var h=new i.Browser.window.Image;f=function(){(a=i.HTMLImage.create(h.width,h.height)).loadImageSource(h,!0),a._setCreateURL(o),clear(),n.onLoaded(a)},h.crossOrigin="",h.onload=f,h.onerror=c,h.src=o,n._imgCache[o]=h}}}]),MiniImage}(),c=function(){function MiniLocation(){_classCallCheck(this,MiniLocation)}return _createClass(MiniLocation,null,[{key:"__init__",value:function(){s.window.navigator.geolocation.getCurrentPosition=MiniLocation.getCurrentPosition,s.window.navigator.geolocation.watchPosition=MiniLocation.watchPosition,s.window.navigator.geolocation.clearWatch=MiniLocation.clearWatch}},{key:"getCurrentPosition",value:function(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;arguments.length>2&&void 0!==arguments[2]&&arguments[2];(e={}).success=function(e){null!=i&&i(e)},e.fail=t,s.window.wx.getLocation(e)}},{key:"watchPosition",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;arguments.length>2&&void 0!==arguments[2]&&arguments[2];return MiniLocation._curID++,(e={}).success=t,e.error=n,MiniLocation._watchDic[MiniLocation._curID]=e,i.Laya.systemTimer.loop(1e3,null,MiniLocation._myLoop),MiniLocation._curID}},{key:"clearWatch",value:function(e){delete MiniLocation._watchDic[e],MiniLocation._hasWatch()||i.Laya.systemTimer.clear(null,MiniLocation._myLoop)}},{key:"_hasWatch",value:function(){var e;for(e in MiniLocation._watchDic)if(MiniLocation._watchDic[e])return!0;return!1}},{key:"_myLoop",value:function(){MiniLocation.getCurrentPosition(MiniLocation._mySuccess,MiniLocation._myError)}},{key:"_mySuccess",value:function(e){var t,n={};for(t in n.coords=e,n.timestamp=i.Browser.now(),MiniLocation._watchDic)MiniLocation._watchDic[t].success&&MiniLocation._watchDic[t].success(n)}},{key:"_myError",value:function(e){var i;for(i in MiniLocation._watchDic)MiniLocation._watchDic[i].error&&MiniLocation._watchDic[i].error(e)}}]),MiniLocation}();c._watchDic={},c._curID=0;var f=function(){function MiniVideo(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:320,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:240;_classCallCheck(this,MiniVideo),this.videoend=!1,this.videourl="",this.videoElement=s.window.wx.createVideo({width:e,height:i,autoplay:!0})}return _createClass(MiniVideo,[{key:"on",value:function(e,i,t){"loadedmetadata"==e?(this.onPlayFunc=t.bind(i),this.videoElement.onPlay=this.onPlayFunction.bind(this)):"ended"==e&&(this.onEndedFunC=t.bind(i),this.videoElement.onEnded=this.onEndedFunction.bind(this)),this.videoElement.onTimeUpdate=this.onTimeUpdateFunc.bind(this)}},{key:"onTimeUpdateFunc",value:function(e){this.position=e.position,this._duration=e.duration}},{key:"onPlayFunction",value:function(){this.videoElement&&(this.videoElement.readyState=200),console.log("=====视频加载完成========"),null!=this.onPlayFunc&&this.onPlayFunc()}},{key:"onEndedFunction",value:function(){this.videoElement&&(this.videoend=!0,console.log("=====视频播放完毕========"),null!=this.onEndedFunC&&this.onEndedFunC())}},{key:"off",value:function(e,i,t){"loadedmetadata"==e?(this.onPlayFunc=t.bind(i),this.videoElement.offPlay=this.onPlayFunction.bind(this)):"ended"==e&&(this.onEndedFunC=t.bind(i),this.videoElement.offEnded=this.onEndedFunction.bind(this))}},{key:"load",value:function(e){this.videoElement&&(this.videoElement.src=e)}},{key:"play",value:function(){this.videoElement&&(this.videoend=!1,this.videoElement.play())}},{key:"pause",value:function(){this.videoElement&&(this.videoend=!0,this.videoElement.pause())}},{key:"size",value:function(e,i){this.videoElement&&(this.videoElement.width=e,this.videoElement.height=i)}},{key:"destroy",value:function(){this.videoElement&&this.videoElement.destroy(),this.videoElement=null,this.onEndedFunC=null,this.onPlayFunc=null,this.videoend=!1,this.videourl=null}},{key:"reload",value:function(){this.videoElement&&(this.videoElement.src=this.videourl)}},{key:"duration",get:function(){return this._duration}},{key:"currentTime",get:function(){return this.videoElement?this.videoElement.initialTime:0},set:function(e){this.videoElement&&(this.videoElement.initialTime=e)}},{key:"videoWidth",get:function(){return this.videoElement?this.videoElement.width:0}},{key:"videoHeight",get:function(){return this.videoElement?this.videoElement.height:0}},{key:"ended",get:function(){return this.videoend}},{key:"loop",get:function(){return!!this.videoElement&&this.videoElement.loop},set:function(e){this.videoElement&&(this.videoElement.loop=e)}},{key:"playbackRate",get:function(){return this.videoElement?this.videoElement.playbackRate:0},set:function(e){this.videoElement&&(this.videoElement.playbackRate=e)}},{key:"muted",get:function(){return!!this.videoElement&&this.videoElement.muted},set:function(e){this.videoElement&&(this.videoElement.muted=e)}},{key:"paused",get:function(){return!!this.videoElement&&this.videoElement.paused}},{key:"x",get:function(){return this.videoElement?this.videoElement.x:0},set:function(e){this.videoElement&&(this.videoElement.x=e)}},{key:"y",get:function(){return this.videoElement?this.videoElement.y:0},set:function(e){this.videoElement&&(this.videoElement.y=e)}},{key:"currentSrc",get:function(){return this.videoElement.src}}],[{key:"__init__",value:function(){}}]),MiniVideo}();e.MiniAccelerator=u,e.MiniAdpter=s,e.MiniFileMgr=t,e.MiniImage=d,e.MiniInput=a,e.MiniLoader=r,e.MiniLocalStorage=l,e.MiniLocation=c,e.MiniSound=o,e.MiniSoundChannel=n,e.MiniVideo=f};