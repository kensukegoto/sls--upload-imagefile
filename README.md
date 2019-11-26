# What's this ?

画像を画像のままAPIGatewayに送り、APIGatewayでBase64に変換するサンプル

# 注意

- Content-Typeとしてimage/jpegeを指定（リクエストヘッダー）した上で画像を送ることを想定している
- （つまり）他のテキスト情報などと一緒に送ることを想定していない