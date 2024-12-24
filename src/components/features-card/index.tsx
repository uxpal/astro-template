import {
  ArrowRight,
  MonitorIcon as Running,
  User2,
  FootprintsIcon as Walking,
  Calendar,
  Sparkles,
  CookingPot,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Component() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12 flex flex-col gap-4">
        <h2 className="text-h2">Three Steps to Effortless Meal Planning</h2>
        <p className="text-subtitle text-muted-foreground">
          Go from 'What should I cook?' straight to 'I know exactly what's for
          dinner'
        </p>
      </div>
      <Card className="bg-slate border-none rounded-3xl">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-slate-tints-3  p-3 rounded-xl">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Set your plan</h3>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-slate-tints-3 p-3 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">
                  Generate Recipes
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-slate-tints-3 p-3 rounded-xl">
                <CookingPot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Cook & Enjoy</h3>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
