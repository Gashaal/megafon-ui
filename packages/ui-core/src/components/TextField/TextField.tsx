import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useCallback, useState, useMemo } from 'react';
import cnCreate from 'utils/cnCreate';
import detectTouch from 'utils/detectTouch';
import './TextField.less';
import InputLabel from '../InputLabel/InputLabel';
import CheckedIcon from 'icons/System/24/Checked_24.svg';
import ErrorIcon from 'icons/System/24/Cancel_24.svg';
import Hide from 'icons/Basic/24/Hide_24.svg';
import Show from 'icons/Basic/24/Show_24.svg';

const InputMask = require('react-input-mask');

export const Verification = {
    VALID: 'valid',
    ERROR: 'error',
} as const;

type VerificationType = typeof Verification[keyof typeof Verification];

export interface ITextFieldProps {
    /** Включить режим textarea */
    multiline?: boolean;
    /** Лейбл */
    label?: string;
    /** Атрибут элемента input. Не работает с **multiline=true** */
    type?: 'text' | 'password' | 'tel' | 'email';
    /** Цветовая тема */
    theme?: 'default' | 'white';
    /** Запрещает отрисовку иконки */
    hideIcon?: boolean;
    /** Отоброжение валидации */
    verification?: VerificationType;
    /** Подпись снизу, меняет цвет в зависимости от аргумента `verification` */
    noticeText?: string;
    /** Управление возможности взаимодействия с компонентом */
    disabled?: boolean;
    /** Показывает обязательность поля  */
    required?: boolean;
    /** Ref обработчик */
    inputRef?: (node: HTMLInputElement | HTMLTextAreaElement) => void;
    /** Имя поля */
    name?: string;
    /** Отображаемый текст в отсутствии значения */
    placeholder?: string;
    /** Атрибут корневого DOM элемента компонента */
    id?: string;
    /** Внешнее значение компонента */
    value?: string;
    /** Максимальное вводимое количество текста */
    maxLength?: number;
    /** Иконка */
    customIcon?: JSX.Element;
    /** Mask for the input-field. Doesn't work with **multiline=true**. */
    /** You may find additional info on https://github.com/sanniassin/react-input-mask */
    mask?: string;
    /** Разделение символов для маски. Не работает **multiline=true** */
    maskChar?: string;
    /** Дополнительный класс корневого элемента */
    className?: string;
    /** Дополнительные классы элементов */
    classes?: { input?: string | null };
    /** Аргумент элемента input */
    inputMode?: 'numeric' | 'tel' | 'decimal' | 'email' | 'url' | 'search' | 'none';
    /** Обработчик изменения значения */
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /** Обработчик выхода из фокуса */
    onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /** Обработчик входа в фокус */
    onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /** Обработчик поднятия клавиши */
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /** Обработчик клика добавленной иконки */
    onCustomIconClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

/* Method for defining internet explorer */
const detectIE11 = (): boolean => {
    if (typeof window === 'undefined') {
        return false;
    }
    const userAgent: string = window.navigator.userAgent.toLowerCase();
    return userAgent.indexOf('trident/') !== -1;
};

const cn = cnCreate('mfui-beta-text-field');
const TextField: React.FC<ITextFieldProps> = ({
        className,
        customIcon,
        disabled,
        hideIcon,
        id,
        label,
        mask,
        maskChar,
        maxLength,
        multiline,
        name,
        placeholder,
        required,
        onBlur,
        onChange,
        onCustomIconClick,
        onFocus,
        onKeyUp,
        theme,
        type,
        value,
        verification,
        noticeText,
        inputRef,
        inputMode,
        classes: {
            input,
        } = {},
    }) => {
    const [isPasswordHidden, setPasswordHidden] = useState<boolean>(true);
    const [inputValue, setInputValue] = React.useState(value);
    const [isIE11, setIsIE11] = React.useState(false);
    const fieldNode = React.useRef<HTMLInputElement | HTMLTextAreaElement>();

    const isPasswordType: boolean = useMemo(() => type === 'password', [type]);
    const isVisiblePassword: boolean = useMemo(
        () => isPasswordType && !isPasswordHidden,
        [isPasswordHidden, isPasswordType]
    );
    const isTouch: boolean = useMemo(() => detectTouch(), []);

    const renderPlaceholderForIe = (classes: string): React.ReactNode => {
        return <span className={cn(classes)}>{placeholder}</span>;
    };

    React.useEffect(() => {
        setInputValue(value);
    }, [value]);

    React.useEffect(() => {
        if (detectIE11()) {
            setIsIE11(true);
        }
    }, []);

    const togglePasswordHiding = useCallback(
        () => setPasswordHidden(prevPassState => !prevPassState),
        [isPasswordHidden]
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInputValue(e.target.value);

        onChange && onChange(e);
    };

    const handleIconClick = useCallback(e => {
        const isClearFuncAvailable = !customIcon && !onCustomIconClick && verification === Verification.ERROR;
        const { current: field } = fieldNode;

        isPasswordType && togglePasswordHiding();
        onCustomIconClick && onCustomIconClick(e);
        isClearFuncAvailable && setInputValue('');
        field && field.focus();
    }, [isPasswordType, togglePasswordHiding, onCustomIconClick, verification, setInputValue]);

    const handleFocus = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onFocus && onFocus(e);
    }, [onFocus]);

    const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onBlur && onBlur(e);
    }, [onBlur]);

    const commonParams = {
        disabled,
        id,
        name,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onKeyUp,
        placeholder,
        required,
        maxLength,
        inputMode,
    };

    const inputParams = {
        ...commonParams,
        className: cn('field', input),
        value: inputValue,
        onChange: handleInputChange,
        type: isVisiblePassword ? 'text' : type,
    };

    const inputMaskParams = {
        mask,
        maskChar,
    };

    const textareaParams = {
        ...commonParams,
        value: inputValue,
        onChange: handleInputChange,
        className: cn('field', { multiline }, input),
    };

    const getFieldNode = (node: HTMLInputElement | HTMLTextAreaElement | null) => {
        if (!node) {
            return;
        }

        fieldNode.current = node;
        inputRef && inputRef(node);
    };

    const renderField = (): React.ReactNode => {
        if (multiline) {
            return renderTextarea();
        }

        return renderInput();
    };

    const renderInput = (): React.ReactNode => {
        if (!inputValue && inputParams.placeholder && isIE11) {
            inputParams.placeholder = '';
        }
        return (
            <>
                {!inputValue && placeholder && isIE11 && renderPlaceholderForIe('placeholder-input')}
                {mask
                    ? <InputMask {...inputParams}  {...inputMaskParams} inputRef={getFieldNode} />
                    : <input {...inputParams} ref={getFieldNode} />
                }
                {!hideIcon && renderIconBlock()}
            </>
        );
    };

    const renderTextarea = (): React.ReactNode => {
        if (!inputValue && textareaParams.placeholder && isIE11) {
            textareaParams.placeholder = '';
        }
        return (
            <>
                {!inputValue && placeholder && isIE11 && renderPlaceholderForIe('placeholder-textarea')}
                <textarea {...textareaParams} ref={getFieldNode} />
            </>
        );
    };

    const getIcon = (): React.ReactNode | null => {
        switch (true) {
            case !!customIcon:
                return customIcon;
            case verification === Verification.ERROR:
                return <ErrorIcon className={cn('icon')} />;
            case verification === Verification.VALID:
                return <CheckedIcon className={cn('icon')} />;
            case isPasswordType && isPasswordHidden:
                return <Hide className={cn('icon')} />;
            case isPasswordType && !isPasswordHidden:
                return <Show className={cn('icon')} />;
            default:
                return null;
        }
    };

    const renderIconBlock = () => {
        const icon: React.ReactNode | null = getIcon();

        return icon && (
            <div
                className={cn('icon-box', {
                    error: verification === Verification.ERROR,
                    password: isPasswordType,
                    'custom-handler': !!onCustomIconClick,
                })}
                onClick={handleIconClick}
            >
                {icon}
            </div>
        );
    };

    const isPlaceholderShowed = isPasswordType && isPasswordHidden && !!inputValue;

    return (
        <div className={cn({
            disabled,
            theme,
            valid: verification === Verification.VALID,
            error: verification === Verification.ERROR,
            icon: !hideIcon && (!!verification || !!customIcon),
            password: isPlaceholderShowed,
        }, className)}>
            {label && <InputLabel htmlFor={id}>
                {label}
                {required && <span className={cn('require-mark')}>*</span>}
            </InputLabel>}
            <div
                className={cn('field-wrapper', { 'no-touch': !isTouch })}
            >
                {renderField()}
            </div>
            {noticeText &&
                <div className={cn('text', {
                    error: verification === Verification.ERROR,
                    success: verification === Verification.VALID,
                })}>
                    {noticeText}
                </div>
            }
        </div>
    );
};

TextField.defaultProps = {
    multiline: false,
    theme: 'default',
    type: 'text',
    hideIcon: false,
};

TextField.propTypes = {
    multiline: PropTypes.bool,
    label: PropTypes.string,
    theme: PropTypes.oneOf(['default', 'white']),
    hideIcon: PropTypes.bool,
    verification: PropTypes.oneOf(Object.values(Verification)),
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    type: PropTypes.oneOf(['text', 'password', 'tel', 'email']),
    name: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    maxLength: PropTypes.number,
    customIcon: PropTypes.element,
    mask: PropTypes.string,
    maskChar: PropTypes.string,
    noticeText: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyUp: PropTypes.func,
    onCustomIconClick: PropTypes.func,
    inputRef: PropTypes.func,
    classes: PropTypes.shape({
        input: PropTypes.string,
    }),
};

export default TextField;
