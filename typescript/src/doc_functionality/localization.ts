// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

export type KVSLocalizationType = {
  [key: string]: KSVLocalizationLanguageType;
};

export type KSVLocalizationLanguageType = {
  encodedData: string;
  type: 'xliff' | 'json' | 'object';
  lastWrite: string;
};

export type KSVLocEntries = Array<KVSLocEntry>;

export type KVSLocEntry = {
  id: string;
  pageId: string;
  type: string;
  t: string;
};

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Localization

export function lookupTranslatedText(
  locData: KVSLocalizationType | undefined,
  locale: string,
  block: DocumentationPageBlockText
): string | null {
  if (!locData) {
    return null;
  }
  const jpLoc = locData[locale];
  if (!jpLoc) {
    return null;
  }
  const data = jpLoc.encodedData;
  if (!data) {
    return null;
  }
  const decodedData = JSON.parse(data) as KSVLocEntries | undefined;

  return lookupMatchingTranslation(decodedData || [], block.id);
}

function lookupMatchingTranslation(
  entries: Array<KVSLocEntry>,
  blockId: string
): string | null {
  const entry = entries.find(entry => {
    return entry.id === blockId;
  });
  if (!entry) {
    return null;
  }
  return entry.t;
}
