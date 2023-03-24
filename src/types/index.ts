import { ReactNode } from 'react';
import { Comments, Posts } from 'generated';
import { BaseTextFieldProps, SxProps, Theme } from '@mui/material';

export type NavigationButtonProps = {
  id: number;
  text: string;
  path?: string;
};

export type PrimarySelectFieldProps = {
  name: string;
  control: any;
  label: string;
  helperText?: string;
  props?: BaseTextFieldProps;
  children: ReactNode;
};

export type PrimaryPasswordFieldProps = {
  name: string;
  control: any;
  label: string;
  helperText?: string;
  placeholder?: string;
  props?: BaseTextFieldProps;
};

export type PrimaryInputFieldProps = {
  name: string;
  control: any;
  label: string;
  placeholder?: string;
  helperText?: string;
  props?: BaseTextFieldProps;
};

export type ProtectedProps = {
  children: JSX.Element;
};

export type PasswordInputAdornmentProps = {
  showPassword: boolean;
  onhandleClickShowPassword: () => void;
};

export type BlogCardProps = {
  tag: string;
  date: string;
  text: string;
  title: string;
  author: string;
  duration: string;
  thumbnail: string;
  authorAvatar: string;
  styles?: SxProps<Theme>;
};

export type PrimaryLoaderProps = {
  isLoading: boolean;
};

export type PrimaryPaginationProps = {
  count: number;
  onReftech: (page: number) => void;
};

export type BlogCardsListProps = {
  data: Posts[];
  total: number;
  paginate: boolean;
  perPage?: number;
  onRefetch?: (page: number) => void;
};

export type BlogMetaDataProps = {
  date: string;
  author: string;
  duration?: string;
  authorAvatar: string;
};

export type CommentCardProps = {
  id: number;
  text: string;
  avatar: string;
  postId: number;
  userName: string;
  isParent?: boolean;
  totallReplies: number;
};

export type BlogContentProps = {
  title: string;
  text: string;
  authorName: string;
};

export type BlogCommentSectionProps = {
  postId: number;
  onRetech: () => void;
  comments: Comments[];
};

export type AddCommentProps = {
  postId: number;
  parentId?: number;
  isReply?: boolean;
  onRefetch: () => void;
};
