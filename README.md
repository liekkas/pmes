## 新疆动环客户端代码

### 配置和启动
源码在src下，输出路径为www
第一次运行：gulp init

开发模式：gulp dev
发布模式：gulp pub

### 图标和启动图片
准备两张png放到resources下，
  - icon.png 最小尺寸512*512
  - splash.png 最小尺寸2208*2208
  
ionic resources --自动生成各种尺寸的图片

### ios
ionic platform add ios
ionic build ios
ionic emulate ios
需要xcode7 打开进行真机调试

### android
ionic platform add android
ionic build android
ionic run android --真机调试


### 功能模块

#### V1

 >* 主页
    >* 商品列表展示
    >* 商品详情
 >* 购物车
 >* 三维模型
    >* 模型展示（渲染服务端处理好得模型）
    >* 模型创建（拍照上传）
 >* 我
    >* 消息
    >* 订单信息
    >* 设置


### IOS 9 问题
已知问题在官网列出，但是补丁放在gist，需要翻墙

打补丁：
https://gist.github.com/IgorMinar/863acd413e3925bf282c


改配置：
找到 platforms/ios/MyApp/MyApp-Info.plist 文件，把下面这段拷在最后一个</dict>之前

```
<key>NSExceptionDomains</key>
  <dict>
    <key>localhost</key>
    <dict>
      <key>NSIncludesSubdomains</key>
      <false/>
      <key>NSExceptionAllowsInsecureHTTPLoads</key>
      <false/>
      <key>NSExceptionRequiresForwardSecrecy</key>
      <true/>
      <key>NSExceptionMinimumTLSVersion</key>
      <string>TLSv1.2</string>
      <key>NSThirdPartyExceptionAllowsInsecureHTTPLoads</key>
      <false/>
      <key>NSThirdPartyExceptionRequiresForwardSecrecy</key>
      <true/>
      <key>NSThirdPartyExceptionMinimumTLSVersion</key>
      <string>TLSv1.2</string>
      <key>NSRequiresCertificateTransparency</key>
      <false/>
    </dict>
  </dict>
```