import { Button } from '~/shared/ui/Button';

export default function HeroInfo() {
  return (
    <div className="relative min-w-64 text-center">
      <p>
        професійна допомога
        <br />в{'\u00A0'}сфері психічного здоров`я
      </p>
      <Button variant={'secondary'} className="text-md mt-6 font-bold">
        знайти фахівця
      </Button>
    </div>
  );
}
