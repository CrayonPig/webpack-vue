export default {
  set: function(c_name, value, time) {
    var exp = new Date();
    exp.setTime(exp.getTime() + time * 1000);
    document.cookie = c_name + "=" + escape(value) + ";expires=" + exp.toGMTString();
  },
  get: function(c_name) {
    if (document.cookie.length>0)
    {
      var  c_start=document.cookie.indexOf(c_name + "=")
      if (c_start!=-1)
      {
        c_start=c_start + c_name.length+1
       var c_end=document.cookie.indexOf(";",c_start)
        if (c_end==-1) c_end=document.cookie.length
        return unescape(document.cookie.substring(c_start,c_end))
      }
    }
    return ""
  },
  del: function(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
     document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
   }
}