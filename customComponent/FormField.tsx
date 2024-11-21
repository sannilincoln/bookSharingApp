import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  className?: string;
}

export function FormField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  className,
}: FormFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View className={className}>
          <Text className="font-mregular text-ndark-100">{label}</Text>
          <Input
            placeholder={placeholder || `Enter ${label}`}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            aria-labelledby={`${name}Label`}
            aria-errormessage={`${name}Error`}
            className="mt-2"
          />
          {error && (
            <Text className="text-red-100 mt-1">
              {error.message || "This field is required."}
            </Text>
          )}
        </View>
      )}
    />
  );
}

interface FormFieldWrapperProps {
  label?: string;
  children: React.ReactNode;
  labelClassName?: string;
  containerClassName?: string;
  info?: string;
}

export function FormFieldWrapper({
  label,
  children,
  labelClassName = "font-semibold  text-ndark-100 my-2",
  containerClassName = "tablet:mb-5 relative",
  info,
}: FormFieldWrapperProps) {
  return (
    <View>
      <Text className={labelClassName}>{label}</Text>
      {info && (
        <Text
          className="text-sm font-mregular  text-nInputPlaceholder-100 mb-2 "
          style={{ marginTop: -10 }}
        >
          {info}
        </Text>
      )}
      <View className={containerClassName}>{children}</View>
    </View>
  );
}
