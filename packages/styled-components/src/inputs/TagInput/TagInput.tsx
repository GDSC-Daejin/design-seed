import React, {
  KeyboardEvent,
  ChangeEvent,
  useCallback,
  useEffect,
  useState,
  forwardRef,
} from 'react';

import styled from 'styled-components';

import Chip from '../../Chip';
import {
  inputDefaultStyle,
  inputTextStyles,
  StyledInputWrapper,
} from '../styled';

import { TagInputProps } from './props';

const StyledInput = styled.input`
  ${inputDefaultStyle}
  ${inputTextStyles}
`;
const ChipSection = styled.div`
  display: flex;
  align-items: center;
  padding-left: 18px;
`;

const TagInput = forwardRef<HTMLInputElement, TagInputProps>(
  (
    {
      onChange,
      tags: initialTags = [],
      maxTags = 3,
      disabled,
      hasError,
      ...rest
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [tags, setTags] = useState<string[]>(initialTags);
    const [value, setValue] = useState('');

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (e.target.value.includes(' ')) {
        insertTag(e.target.value);
      }
    };

    const onRemove = (tag: string) => {
      if (!tags) {
        return;
      }
      const nextTags = tags.filter((t) => t !== tag);
      setTags(nextTags);
    };

    const insertTag = useCallback(
      (tag: string) => {
        if (!tags) {
          return;
        }
        if (tag === '' || tags.includes(tag)) {
          return;
        }
        const processed = tag.trim().split(' ');
        setTags([...tags, ...processed]);
        setValue('');
      },
      [tags],
    );

    const onKeyDown = useCallback(
      (e: KeyboardEvent) => {
        // 태그 삭제
        if (e.key === 'Backspace' && value === '') {
          setTags(tags.slice(0, tags.length - 1));
          return;
        }
        // 태그 등록
        const keys = ['Enter'];
        if (!value) {
          return;
        }

        if (keys.includes(e.key)) {
          e.preventDefault();
          insertTag(value);
        }
      },
      [insertTag, tags, value],
    );

    useEffect(() => {
      if (!tags) {
        return;
      }
      onChange(tags);
    }, [tags]);

    useEffect(() => {
      setTags(initialTags);
    }, []);

    return (
      <StyledInputWrapper
        isFocused={isFocused}
        isDisabled={disabled}
        hasError={hasError}
      >
        {tags.length > 0 && (
          <ChipSection>
            {tags.map((tag: string) => (
              <Chip key={tag} onClick={() => onRemove(tag)} size={'L'}>
                {tag}
              </Chip>
            ))}
          </ChipSection>
        )}
        {tags.length < maxTags && (
          <StyledInput
            ref={ref}
            placeholder="태그를 입력하세요"
            value={value}
            tabIndex={2}
            onKeyDown={onKeyDown}
            onChange={onChangeInput}
            onFocus={(event) => {
              setIsFocused(true);
              rest.onFocus?.(event);
            }}
            onBlur={(event) => {
              setIsFocused(false);
              rest.onBlur?.(event);
            }}
          />
        )}
      </StyledInputWrapper>
    );
  },
);

export default TagInput;
