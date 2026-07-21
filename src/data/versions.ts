import { docsSections, type DocSection } from './docs'
import { docsSectionsV1_0_0 } from './docs-v1.0.0'
import { docsSectionsV1_1_0 } from './docs-v1.1.0'
import { docsSectionsV1_2_0 } from './docs-v1.2.0'

export interface Version {
  id: string
  label: string
  isLatest: boolean
  sections: DocSection[]
}

export const versions: Version[] = [
  {
    id: 'v1.0.0',
    label: 'v1.0.0',
    isLatest: false,
    sections: docsSectionsV1_0_0,
  },
  {
    id: 'v1.1.0',
    label: 'v1.1.0',
    isLatest: false,
    sections: docsSectionsV1_1_0,
  },
  {
    id: 'v1.2.0',
    label: 'v1.2.0',
    isLatest: false,
    sections: docsSectionsV1_2_0,
  },
  {
    id: 'v1.3.0',
    label: 'v1.3.0',
    isLatest: true,
    sections: docsSections,
  },
]

export function getVersion(versionId: string): Version | undefined {
  return versions.find(v => v.id === versionId)
}

export function getLatestVersion(): Version {
  return versions.find(v => v.isLatest) || versions[versions.length - 1]
}

export function getDefaultVersionId(): string {
  return getLatestVersion().id
}
