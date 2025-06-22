import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="grid grid-cols-5 min-h-screen">
      {/* Sidebar */}
      <aside className="col-span-1 bg-gray-100 p-6 border-r">
        <h2 className="text-xl font-bold mb-6">Wise Freee Sync</h2>
        <nav className="space-y-4">
          <Button variant="ghost" className="w-full justify-start">取引履歴</Button>
          <Button variant="ghost" className="w-full justify-start">自動仕訳</Button>
          <Button variant="ghost" className="w-full justify-start">会計出力</Button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="col-span-4 p-8 space-y-6">
        <section>
          <h1 className="text-2xl font-bold mb-4">取引明細の取得</h1>
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="wise-api">Wise APIトークン</Label>
                <Input id="wise-api" placeholder="sk_test_xxx..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="from-date">開始日</Label>
                <Input id="from-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="to-date">終了日</Label>
                <Input id="to-date" type="date" />
              </div>
              <Button className="mt-4">取引明細を取得</Button>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold">明細一覧（サンプル）</h2>
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <p className="font-medium">2025-06-01</p>
                <p>USDC受取: $1000</p>
                <p>仕訳: 売掛金 / 売上</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="font-medium">2025-06-03</p>
                <p>外注費支払: $500</p>
                <p>仕訳: 外注費 / 普通預金</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="font-medium">2025-06-07</p>
                <p>USDC送金: $300</p>
                <p>仕訳: 未払金 / 普通預金</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
