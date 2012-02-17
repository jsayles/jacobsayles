// Created by iWeb 3.0.3 local-build-20110407

function createMediaStream_id3()
{return IWCreatePhotocast("http://jacobsayles.com/House/Attic_Room/Photos_files/rss.xml",false);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('http://jacobsayles.com/House/Attic_Room',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('http://jacobsayles.com/House/Attic_Room',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(3,new IWSize(214,214),new IWSize(214,28),new IWSize(216,257),27,27,0,new IWSize(24,26)),new IWPhotoFrame([IWCreateImage('Photos_files/Modern_C_TL.png'),IWCreateImage('Photos_files/Modern_S_T.png'),IWCreateImage('Photos_files/Modern_C_TR.png'),IWCreateImage('Photos_files/Modern_S_R.png'),IWCreateImage('Photos_files/Modern_C_BR.png'),IWCreateImage('Photos_files/Modern_S_B.png'),IWCreateImage('Photos_files/Modern_C_BL.png'),IWCreateImage('Photos_files/Modern_S_L.png')],null,2,0.700000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,null,'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id3(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Photos_files/PhotosMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id4');initializeMediaStream_id3()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
