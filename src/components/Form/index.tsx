import { useMemo } from 'react';
import { Text, Card, Padding, Button } from '@/ui';
import { mockBackEndData } from '@/mock';
import { useFormData } from '@/contexts';
import { useStepStore } from '@/hooks/useStepStore';
import { FieldHandler } from '@/components/FieldHandler';

export default function Form(): JSX.Element {
  const { isValid, onSubmit, formData } = useFormData();
  const { step, handleStepForward, handleStepBackward } = useStepStore();

  const { steps } = mockBackEndData;

  const currentFormData = useMemo(() => steps?.[step], [step]);

  const isLast = step === steps.length - 1;
  const canGoBack = step > 0;

  // This could be optimized by attaching events to each screen field "change" and update this object accordingly
  const allFielsValid = isLast
    ? isValid
    : currentFormData.fields.every(({ name, required, dependsOn }) => {
        const fieldData = formData.getFieldState(name);
        const dependantValid = !!dependsOn && !formData.getFieldState(dependsOn).invalid;
        const dependantEnabled = dependantValid && formData.getValues(dependsOn);
        if (!dependsOn || (dependsOn && dependantEnabled)) {
          const touched = required ? fieldData.isDirty : true;
          return !fieldData.invalid && touched;
        }
        return true;
      });

  function handleClickPrimary(): void {
    if (isLast) {
      onSubmit();
    } else {
      handleStepForward();
    }
  }

  function handleClickSecondary(): void {
    if (canGoBack) {
      handleStepBackward();
    }
  }

  const primaryDisabled = !allFielsValid;
  const primaryButtonLabel = isLast ? 'Finish' : 'Next';
  const backButtonLabel = 'Back';

  return (
    <section
      style={{
        maxWidth: 640,
        margin: 'auto',
      }}
    >
      <Card isRounded={false}>
        <Padding right={48} left={48} top={40} bottom={32}>
          {!!currentFormData.title && (
            <Text color="#000000" size="extraLarge">
              {currentFormData.title}
            </Text>
          )}
          {!!currentFormData.description && (
            <Text color="#546A83" size="regular">
              {currentFormData.description}
            </Text>
          )}
          {currentFormData.fields.map((field) => (
            <FieldHandler key={field.name} data={field} />
          ))}
          <footer
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            {canGoBack && (
              <Button
                onClick={handleClickSecondary}
                size="secondary"
                minWidth={97}
                style={{
                  marginTop: '42px',
                  marginRight: 'auto',
                }}
              >
                {backButtonLabel}
              </Button>
            )}
            <Button
              onClick={handleClickPrimary}
              disabled={primaryDisabled}
              size="primary"
              minWidth={91}
              style={{
                marginTop: '42px',
                marginLeft: 'auto',
              }}
            >
              {primaryButtonLabel}
            </Button>
          </footer>
        </Padding>
      </Card>
    </section>
  );
}
