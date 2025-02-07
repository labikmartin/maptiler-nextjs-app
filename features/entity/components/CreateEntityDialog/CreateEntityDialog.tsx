import type { DialogProps } from '@toolpad/core';

import { FormDialog } from '@/common/components/FormDialog/FormDialog';

export function CreateEntityDialog(props: DialogProps) {
  const payload = {
    onConfirm: () => {
      props.onClose();
      console.log('confirm');
    },
  };

  return (
    <FormDialog {...props} payload={payload} title="Create New Entity">
      Hello
    </FormDialog>
  );
}
