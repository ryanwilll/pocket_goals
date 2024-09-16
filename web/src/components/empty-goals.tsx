import { Plus } from 'lucide-react';

import { Button } from './ui/button';
import { DialogTrigger } from './ui/dialog';

import letsStartImage from '../assets/lets-start.svg';
import logoImage from '../assets/logo-in-orbit.svg';

export function EmptyGoals() {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-8'>
      <img src={logoImage} alt='in.orbit logo' />
      <img src={letsStartImage} alt='letsStart logo' />
      <p className='text-zinc-300 leading-relaxed max-w-80 text-center'>
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button className='px-4 py-2.5 rounded-lg bg-violet-500 text-violet-50 flex items-center gap-2 text-sm font-medium tracking-tight hover:bg-violet-600 duration-300'>
          <Plus className='size-4' /> Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}
