def index
  @timer = Timer.all
  @item = Date.new(2015, 2, 10) # @item.limit_day の代わり
  # 出力時には2015-2-10 のような文字列に換わる
end