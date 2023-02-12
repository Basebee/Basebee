import { Organization, Project } from '@basebee/db';
import { atom } from 'jotai';
import { atomWithLocalStorage } from '~/utils/atomWithLocalStorage';

export const selectedProjectIdAtom = atom<string | null>(null);
