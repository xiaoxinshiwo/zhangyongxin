(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{223:function(t,a,s){"use strict";s.r(a);var n=s(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("ol",[s("li",[t._v("版本替换\n分享一个有用的maven命令："),s("code",[t._v("mvn -N versions:update-child-modules")]),t._v("\n这个命令可以在修改父pom version后全局替换子module的version为当前父module的version\n之前都是全局搜索替换，有点麻烦，现在一个命令行搞定，如果你还不知道，赶紧用起来吧 😃\n另外一个更方便的更新版本号的命令："),s("code",[t._v("versions:set -DnewVersion=1.3.73")])]),t._v(" "),s("li",[t._v("上传本地jar到maven仓库")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("— resource\nmvn deploy:deploy-file -DgroupId=com.alibaba.sdk -DartifactId=taobao-sdk -Dversion=20181204-test -Dpackaging=jar -Dfile=/Users/zhangyongxin/Downloads/dingtalk-sdk-java/taobao-sdk-java-auto_1479188381469-20181204-source.jar -Dclassifier=sources -Durl=https://maven.carzone365.com/repository/maven-3rd/ -DrepositoryId=releases\n\n— jar\nmvn deploy:deploy-file -DgroupId=com.alibaba.sdk -DartifactId=taobao-sdk -Dversion=20181204-test -Dpackaging=jar -Dfile=/Users/zhangyongxin/Downloads/dingtalk-sdk-java/taobao-sdk-java-auto_1479188381469-20181204.jar -Durl=https://maven.carzone365.com/repository/maven-3rd/ -DrepositoryId=releases\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("maven依赖本地jar")])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.taobao.top"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("lippi-oapi-encrpt"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("dingtalk-SNAPSHOT"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("system"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("systemPath")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${pom.basedir}/lib/lippi-oapi-encrpt.jar"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("systemPath")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])])])}],!1,null,null,null);o.options.__file="maven.md";a.default=o.exports}}]);