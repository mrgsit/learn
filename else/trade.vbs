Sub trade_price()

Dim jsonText As String
Dim jsonObject As Object, item As Object
Dim i As Long
Dim list As Worksheet

Set list = Worksheets("list")
jsonText = Json.Document(Web.Contents("https://poloniex.com/public?command=returnTicker"))

Set jsonObject = JsonConverter.ParseJson(jsonText)

i = 3

list.Cells(2, 1) = "id"
list.Cells(2, 2) = "last"
list.Cells(2, 3) = "high24hr"

For Each item In jsonObject("USDT_BTC")
    list.Cells(i, 1) = item("id")
    list.Cells(i, 2) = item("last")
    list.Cells(i, 3) = item("high24hr")
    i = i + 1
    
Next

End Sub
