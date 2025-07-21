import * as Dialog from '@radix-ui/react-dialog';
import React, { useState } from 'react';

function Pitch() {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  return (
    <div>
    
      <button
        onClick={handleOpenDialog}
        className="bg-blue-600 text-white w-16 h-16 rounded-full font-semibold p-3"
        style={{ position: 'absolute', top: '25%', left: '80%', transform: 'translate(0, -50%)' }}
      >
        <img src="/Presentation.svg" alt="pitch" className="w-5 h-5 ml-2" />
        Pitch
      </button>

     
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />

          <Dialog.Content className="fixed top-1/2 left-1/2 w-80 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg space-y-4">
            <Dialog.Title className="text-xl font-bold">Pitch Options</Dialog.Title>

            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Option 1
              </button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded">
                Option 2
              </button>
            </div>

            <Dialog.Close asChild>
              <button className="mt-4 text-gray-500 underline">Cancel</button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default Pitch;
