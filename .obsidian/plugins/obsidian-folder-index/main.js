/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/main.ts
__export(exports, {
  default: () => FolderIndexPlugin
});
var import_obsidian5 = __toModule(require("obsidian"));

// src/modules/IndexContentRenderer.ts
var import_obsidian = __toModule(require("obsidian"));

// src/models/FileHeader.ts
var FileHeader = class {
  constructor(cached) {
    this.cached = cached;
  }
  get level() {
    return this.cached.level;
  }
  get rawHeading() {
    return this.cached.heading;
  }
  get isLink() {
    return /\[\[(.*?)\]\]/.test(this.cached.heading);
  }
  get href() {
    if (!this.isLink)
      return null;
    const value = this.parseMarkdownLink(this.rawHeading);
    const parts = value.split("|");
    return `#${parts.join(" ")}`;
  }
  get markdownHref() {
    if (!this.isLink)
      return `[[#${this.rawHeading}]]`;
    const value = this.parseMarkdownLink(this.rawHeading);
    const parts = value.split("|");
    const hasAlias = parts.length > 1;
    if (!hasAlias) {
      return `[[#${parts[0]}]]`;
    }
    const link = parts.join(" ");
    return `[[#${link}|${parts[1]}]]`;
  }
  parseMarkdownLink(link) {
    const [, base] = link.match(/\[\[(.*?)]\]/) || [];
    return base;
  }
};

// src/modules/IndexContentRenderer.ts
var IndexContentRenderer = class extends import_obsidian.MarkdownRenderChild {
  constructor(app, plugin, filePath, container) {
    super(container);
    this.app = app;
    this.plugin = plugin;
    this.filePath = filePath;
    this.container = container;
  }
  onload() {
    return __async(this, null, function* () {
      yield this.render();
      this.plugin.eventManager.on("settingsUpdate", this.onSettingsUpdate.bind(this));
    });
  }
  onunload() {
    return __async(this, null, function* () {
      this.plugin.eventManager.off("settingsUpdate", this.onSettingsUpdate.bind(this));
    });
  }
  onSettingsUpdate(_settings) {
    this.render().then();
  }
  render() {
    return __async(this, null, function* () {
      this.container.empty();
      const parent = this.app.vault.getAbstractFileByPath(this.filePath).parent;
      const files = parent.children;
      yield import_obsidian.MarkdownRenderer.renderMarkdown(this.buildMarkdownText(files), this.container, this.filePath, this);
    });
  }
  buildMarkdownText(filtered_files) {
    const list = [];
    filtered_files.forEach((value) => {
      if (value instanceof import_obsidian.TFile) {
        if (value.basename == value.parent.name) {
          return;
        }
        const headings = this.app.metadataCache.getFileCache(value).headings;
        const fileLink = this.app.metadataCache.fileToLinktext(value, this.filePath);
        list.push(`1. ${this.plugin.settings.includeFileContent ? "!" : ""}[[${fileLink}|${value.basename}]]`);
        if (headings != null && !this.plugin.settings.disableHeadlines) {
          for (let i = this.plugin.settings.skipFirstHeadline ? 1 : 0; i < headings.length; i++) {
            const heading = new FileHeader(headings[i]);
            const numIndents = new Array(Math.max(1, heading.level - headings[0].level));
            const indent = numIndents.fill("	").join("");
            list.push(`${indent}1. [[${fileLink}#${heading.rawHeading}|${heading.rawHeading}]]`);
          }
        }
      }
    });
    return list.join("\n");
  }
};

// src/modules/GraphManipulatorModule.ts
var import_obsidian2 = __toModule(require("obsidian"));
var GraphManipulatorModule = class {
  constructor(app, plugin) {
    this.app = app;
    this.plugin = plugin;
    this.load();
  }
  onLayoutChange() {
    this.graphsLeafs = this.app.workspace.getLeavesOfType("graph");
    this.plugin.eventManager.emit("graphLeafUpdate", this.graphsLeafs);
  }
  onLeafUpdate(leaves) {
    leaves.forEach((value) => {
      const engine = this.getEngine(value);
      if (engine.oldRender == null) {
        engine.oldRender = engine.render;
        engine.render = () => {
          if (this.plugin.settings.graphOverwrite) {
            this.render(engine);
          } else {
            engine.oldRender();
          }
        };
        if (this.plugin.settings.graphOverwrite) {
          this.clearGraph(engine);
          this.render(engine);
        }
      }
    });
  }
  onSettingsUpdate() {
    if (this.oldGraphOverwrite != this.plugin.settings.graphOverwrite) {
      this.redrawAllGraphs();
      this.oldGraphOverwrite = this.plugin.settings.graphOverwrite;
    }
  }
  load() {
    this.oldGraphOverwrite = this.plugin.settings.graphOverwrite;
    this.plugin.eventManager.on("onLayoutChange", this.onLayoutChange.bind(this));
    this.plugin.eventManager.on("graphLeafUpdate", this.onLeafUpdate.bind(this));
    this.plugin.eventManager.on("settingsUpdate", this.onSettingsUpdate.bind(this));
    this.onLayoutChange();
    if (this.plugin.settings.graphOverwrite) {
      this.clearAllGraphs();
      this.redrawAllGraphs();
    }
  }
  unload() {
    this.graphsLeafs.forEach((value) => {
      const engine = this.getEngine(value);
      if (engine.oldRender != null) {
        engine.render = engine.oldRender;
        delete engine.oldRender;
        this.clearGraph(engine);
        engine.render();
      }
    });
  }
  render(engine) {
    const renderSettings = engine.getOptions();
    const graph = {};
    this.app.vault.getFiles().forEach((file) => __async(this, null, function* () {
      if (Object.keys(engine.fileFilter).length > 0 && !engine.fileFilter[file.path]) {
        return;
      }
      const edges = {};
      const cache = this.app.metadataCache.getFileCache(file);
      if (file.parent.name + ".md" == file.name || file.name == this.plugin.settings.rootIndexFile) {
        file.parent.children.forEach((otherFile) => {
          if (otherFile instanceof import_obsidian2.TFile && file.path != otherFile.path) {
            edges[otherFile.path] = true;
          }
          if (otherFile instanceof import_obsidian2.TFolder) {
            const subIndex = otherFile.children.find((value) => value.name == otherFile.name + ".md");
            if (subIndex != null) {
              edges[subIndex.path] = true;
            }
          }
        });
      }
      if (cache != null) {
        if (cache.links != null) {
          cache.links.forEach((link) => {
            if (link.link.contains("#")) {
              link.link = link.link.split(/#/)[0];
            }
            const linkedFile = this.app.metadataCache.getFirstLinkpathDest(link.link, file.path);
            if (linkedFile == null) {
              edges[link.link] = true;
              if (!renderSettings.hideUnresolved) {
                graph[link.link] = {
                  links: {},
                  type: "unresolved"
                };
              }
            } else {
              edges[linkedFile.path] = true;
            }
          });
        }
        if (cache.frontmatter != null) {
          const frontMatterTags = (0, import_obsidian2.parseFrontMatterTags)(cache.frontmatter);
          if (frontMatterTags != null && renderSettings.showTags == true) {
            frontMatterTags.forEach((tag) => {
              graph[tag] = {
                links: {},
                type: "tag"
              };
              edges[tag] = true;
            });
          }
        }
        if (cache.tags != null && renderSettings.showTags == true) {
          cache.tags.forEach((tag) => {
            graph[tag.tag] = {
              links: {},
              type: "tag"
            };
            edges[tag.tag] = true;
          });
        }
        if (cache.embeds != null) {
          cache.embeds.forEach((embed) => {
            const linkedFile = this.app.metadataCache.getFirstLinkpathDest(embed.link, file.path);
            if (linkedFile == null) {
              edges[embed.link] = true;
              graph[embed.link] = {
                links: {},
                type: "unresolved"
              };
            } else {
              edges[linkedFile.path] = true;
            }
          });
        }
      }
      let type = "";
      if (this.app.workspace.getActiveFile() != null && this.app.workspace.getActiveFile().path == file.path) {
        type = "focused";
      } else if (file.extension != "md") {
        type = "attachment";
      }
      if (type == "attachment" && !renderSettings.showAttachments) {
        return;
      }
      graph[file.path] = {
        links: edges,
        type
      };
    }));
    if (!renderSettings.showOrphans) {
      let allLinks = [];
      for (const graphKey in graph) {
        if (Object.keys(graph[graphKey]["links"]).length > 0) {
          allLinks.push(graphKey);
        }
        allLinks = allLinks.concat(Object.keys(graph[graphKey]["links"]));
      }
      for (const graphKey in graph) {
        if (!allLinks.includes(graphKey)) {
          delete graph[graphKey];
        }
      }
    }
    function AddColorTag(filePath, nodeType) {
      const searchQueries = engine.searchQueries;
      const engineOptions = engine.options;
      const fileFilter = engine.fileFilter;
      return !searchQueries || (nodeType === "" ? filePath === engineOptions.localFile || (fileFilter.hasOwnProperty(filePath) ? fileFilter[filePath] : !engine.hasFilter) : nodeType === "tag" ? searchQueries.every(function(e) {
        return !!e.color || !!e.query.matchTag(filePath);
      }) : nodeType !== "attachment" || searchQueries.every(function(e) {
        return !!e.color || !!e.query.matchFilepath(filePath);
      }));
    }
    for (const graphKey in graph) {
      const returnValue = AddColorTag(graphKey, graph[graphKey].type);
      if (returnValue === true)
        continue;
      graph[graphKey].color = returnValue;
    }
    engine.renderer.setData({
      nodes: graph
    });
  }
  redrawAllGraphs() {
    this.clearAllGraphs();
    this.graphsLeafs.forEach((value) => this.getEngine(value).render());
  }
  clearAllGraphs() {
    this.graphsLeafs.forEach((value) => this.getEngine(value).renderer.setData({
      nodes: {}
    }));
  }
  getEngine(leaf) {
    return leaf.view.dataEngine;
  }
  clearGraph(engine) {
    engine.renderer.setData({
      nodes: {}
    });
  }
};

// src/main.ts
var import_events = __toModule(require("events"));

// src/models/PluginSettingsTab.ts
var import_obsidian3 = __toModule(require("obsidian"));
var DEFAULT_SETTINGS = {
  skipFirstHeadline: true,
  disableHeadlines: false,
  graphOverwrite: false,
  rootIndexFile: "Dashboard.md",
  autoCreateIndexFile: true,
  autoRenameIndexFile: true,
  includeFileContent: false,
  hideIndexFiles: false,
  indexFileInitText: "---\ntags: MOCs\n---\n\n# MOC: {{folder}}\n\n---\n\n```folder-index-content\n```",
  autoPreviewMode: false
};
var PluginSettingsTab = class extends import_obsidian3.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Graph Settings" });
    new import_obsidian3.Setting(containerEl).setName("Overwrite Graph View").setDesc("This will overwrite the default graph view and link files based on their index as well as their normal links").addToggle((component) => component.setValue(this.plugin.settings.graphOverwrite).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.graphOverwrite = value;
      yield this.plugin.saveSettings();
    })));
    containerEl.createEl("h2", { text: "Index File Settings" });
    new import_obsidian3.Setting(containerEl).setName("Root Index File").setDesc("The File that is used for the Root Index File").addText((component) => component.setValue(this.plugin.settings.rootIndexFile).setPlaceholder("dashboard.md").onChange((value) => __async(this, null, function* () {
      this.plugin.settings.rootIndexFile = value;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian3.Setting(containerEl).setName("Initial Content").setDesc("Set the initial content for new folder indexes.").addTextArea((component) => {
      component.setPlaceholder("About the folder.").setValue(this.plugin.settings.indexFileInitText).onChange((value) => __async(this, null, function* () {
        this.plugin.settings.indexFileInitText = value;
        yield this.plugin.saveSettings();
      }));
      component.inputEl.rows = 8;
      component.inputEl.cols = 50;
    });
    new import_obsidian3.Setting(containerEl).setName("Auto create IndexFile").setDesc("This will automatically create an IndexFile when you create a new folder").addToggle((component) => component.setValue(this.plugin.settings.autoCreateIndexFile).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.autoCreateIndexFile = value;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian3.Setting(containerEl).setName("Auto include preview").setDesc("This will automatically include previews when creating index files (!) ").addToggle((component) => component.setValue(this.plugin.settings.includeFileContent).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.includeFileContent = value;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian3.Setting(containerEl).setName("Automatically Rename IndexFile").setDesc("This will automatically rename the folders index file as you rename folders").addToggle((component) => component.setValue(this.plugin.settings.autoRenameIndexFile).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.autoRenameIndexFile = value;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian3.Setting(containerEl).setName("Hide IndexFile").setDesc("This will hide IndexFiles from the file explorer (Disabled as it causes bugs right now)").addToggle((component) => component.setValue(this.plugin.settings.hideIndexFiles).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.hideIndexFiles = value;
      yield this.plugin.saveSettings();
    })).setDisabled(true));
    containerEl.createEl("h2", { text: "Content Renderer Settings" });
    new import_obsidian3.Setting(containerEl).setName("Skip First Headline").setDesc("This will skip the first h1 header to prevent duplicate entries.").addToggle((component) => component.setValue(this.plugin.settings.skipFirstHeadline).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.skipFirstHeadline = value;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian3.Setting(containerEl).setName("Disable Headlines").setDesc("This will disable listing headlines within the index file").addToggle((component) => component.setValue(this.plugin.settings.disableHeadlines).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.disableHeadlines = value;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian3.Setting(containerEl).setName("Automatic Preview mode").setDesc("This will automatically swap to preview mode when opening an index file").addToggle((component) => component.setValue(this.plugin.settings.autoPreviewMode).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.autoPreviewMode = value;
      yield this.plugin.saveSettings();
    })));
  }
};

// src/modules/FolderNoteModule.ts
var import_obsidian4 = __toModule(require("obsidian"));
var FolderNoteModule = class {
  constructor(app, plugin) {
    this.app = app;
    this.plugin = plugin;
    this.state_by_plugin = false;
    this.previous_file = null;
    this.load();
  }
  load() {
    this.app.workspace.onLayoutReady(() => {
      this.plugin.registerEvent(this.app.vault.on("create", this.onFileCreate.bind(this)));
    });
    this.plugin.registerEvent(this.app.vault.on("rename", this.onFileRename.bind(this)));
    this.plugin.eventManager.on("fileExplorerFolderClick", this.onFolderClick.bind(this));
    this.plugin.eventManager.on("settingsUpdate", this.onSettingsUpdate.bind(this));
    this.plugin.eventManager.on("onLayoutChange", this.onLayoutChange.bind(this));
    this.plugin.registerDomEvent(document, "click", (evt) => {
      let folderPath = "";
      let folderName = "";
      if (!(evt.target instanceof HTMLElement)) {
        return;
      }
      const elemTarget = evt.target;
      let folderElem = elemTarget;
      const className = elemTarget.className.toString();
      if (elemTarget.parentElement.className.contains("mod-root"))
        return;
      if (elemTarget.parentElement.parentElement.className.contains("mod-root"))
        return;
      if (className.contains("nav-folder-title-content")) {
        folderName = folderElem.getText();
        folderElem = elemTarget.parentElement;
        folderPath = folderElem.attributes.getNamedItem("data-path").textContent;
        this.plugin.eventManager.emit("fileExplorerFolderClick", elemTarget, folderPath, folderName);
      } else if (className.contains("nav-folder-title")) {
        folderPath = elemTarget.attributes.getNamedItem("data-path").textContent;
        folderName = elemTarget.lastElementChild.getText();
        this.plugin.eventManager.emit("fileExplorerFolderClick", elemTarget, folderPath, folderName);
      }
    });
    if (this.plugin.settings.hideIndexFiles) {
      FolderNoteModule.hideAllIndexFiles();
    }
  }
  unload() {
    this.plugin.eventManager.off("fileExplorerFolderClick", this.onFolderClick.bind(this));
    FolderNoteModule.showAllIndexFiles();
  }
  onLayoutChange() {
    return __async(this, null, function* () {
      if (!this.plugin.settings.autoPreviewMode) {
        return;
      }
      const current_file = yield this.app.workspace.getActiveFile();
      if (this.previous_file == null) {
        this.previous_file = current_file;
      }
      if (current_file.path != this.previous_file.path) {
        const is_index_file = current_file.basename == current_file.parent.name;
        const state = this.app.workspace.getLeaf().getViewState();
        if (is_index_file) {
          state.state.mode = "preview";
          yield this.app.workspace.getLeaf().setViewState(state);
          this.state_by_plugin = true;
        } else {
          if (this.state_by_plugin) {
            state.state.mode = "source";
            yield this.app.workspace.getLeaf().setViewState(state);
            this.state_by_plugin = false;
          }
        }
      }
      this.previous_file = current_file;
    });
  }
  onSettingsUpdate(_settings) {
    return __async(this, null, function* () {
      if (!this.plugin.settings.hideIndexFiles) {
        FolderNoteModule.showAllIndexFiles();
      } else {
        FolderNoteModule.hideAllIndexFiles();
      }
    });
  }
  static hideAllIndexFiles() {
    const modRoot = document.getElementsByClassName("nav-folder mod-root")[0];
    const allFiles = modRoot.getElementsByClassName("nav-file");
    for (let i = allFiles.length - 1; i >= 0; i--) {
      const file = allFiles[i];
      const dataPath = file.getElementsByClassName("nav-file-title")[0].getAttribute("data-path");
      const pathParts = dataPath.split(/\//);
      const parentFolder = pathParts.at(-2);
      if (parentFolder + ".md" == pathParts.at(-1)) {
        file.addClass("hide-index-folder-note");
      }
    }
  }
  static showAllIndexFiles() {
  }
  onFolderClick(_target, path, name) {
    return __async(this, null, function* () {
      let indexFile = this.app.vault.getAbstractFileByPath(path + "/" + name + ".md");
      if (indexFile != null) {
        yield this.app.workspace.getLeaf().openFile(indexFile);
      } else if (this.plugin.settings.autoCreateIndexFile) {
        indexFile = yield this.createIndexFile(path, name);
        new import_obsidian4.Notice("Created IndexFile for: " + name);
        yield this.app.workspace.getLeaf().openFile(indexFile);
      }
      if (this.plugin.settings.hideIndexFiles) {
        FolderNoteModule.hideAllIndexFiles();
      } else {
        FolderNoteModule.showAllIndexFiles();
      }
    });
  }
  createIndexFile(path, name) {
    return __async(this, null, function* () {
      return yield this.app.vault.create(`${path}/${name}.md`, this.plugin.settings.indexFileInitText.replace("{{folder}}", name));
    });
  }
  onFileCreate(file) {
    return __async(this, null, function* () {
      if (file instanceof import_obsidian4.TFolder) {
        if (this.plugin.settings.autoCreateIndexFile) {
          yield this.createIndexFile(file.path, file.name);
          new import_obsidian4.Notice("Created IndexFile for: " + file.name);
        }
      }
    });
  }
  onFileRename(file, oldPath) {
    return __async(this, null, function* () {
      if (file instanceof import_obsidian4.TFolder && this.plugin.settings.autoRenameIndexFile) {
        const indexFile = file.children.find((value) => {
          return value instanceof import_obsidian4.TFile && value.basename == oldPath.split(/\//).last();
        });
        if (indexFile == null) {
          if (this.plugin.settings.autoCreateIndexFile) {
            yield this.createIndexFile(file.path, file.name + ".md");
            return;
          } else {
            return;
          }
        }
        if (indexFile.basename == file.name) {
          return;
        }
        indexFile.path = file.path + "/" + indexFile.name;
        const newFilePath = file.path + "/" + file.name + "." + indexFile.extension;
        const conflictingFile = file.children.find((value) => {
          return value instanceof import_obsidian4.TFile && value.basename == file.name;
        });
        if (conflictingFile != null) {
          new import_obsidian4.Notice(`Could not Automatically rename IndexFile because there already is a file with this name! This file will now be used!`);
          return;
        }
        yield this.app.fileManager.renameFile(indexFile, newFilePath);
      }
    });
  }
};

// src/main.ts
var FolderIndexPlugin = class extends import_obsidian5.Plugin {
  constructor() {
    super(...arguments);
    this.oldGraphSetting = false;
  }
  onload() {
    return __async(this, null, function* () {
      console.log("Loading FolderTableContent");
      this.eventManager = new import_events.EventEmitter();
      yield this.loadSettings();
      this.settings.hideIndexFiles = false;
      yield this.saveSettings();
      this.oldGraphSetting = this.settings.graphOverwrite;
      this.addSettingTab(new PluginSettingsTab(this.app, this));
      this.app.workspace.onLayoutReady(this.onLayoutReady.bind(this));
      this.registerEvent(this.app.workspace.on("layout-change", this.onLayoutChange.bind(this)));
      this.eventManager.on("settingsUpdate", this.onSettingsUpdate.bind(this));
      this.registerMarkdownCodeBlockProcessor("folder-index-content", (source, el, ctx) => {
        ctx.addChild(new IndexContentRenderer(this.app, this, ctx.sourcePath, el));
      });
      this.folderNodeModule = new FolderNoteModule(this.app, this);
      if (this.settings.graphOverwrite) {
        this.graphManipulator = new GraphManipulatorModule(this.app, this);
      }
    });
  }
  onSettingsUpdate() {
    if (this.settings.graphOverwrite != this.oldGraphSetting) {
      if (this.settings.graphOverwrite) {
        this.graphManipulator = new GraphManipulatorModule(this.app, this);
      } else {
        this.graphManipulator.unload();
      }
      this.oldGraphSetting = this.settings.graphOverwrite;
    }
  }
  onLayoutChange() {
    this.eventManager.emit("onLayoutChange");
  }
  onLayoutReady() {
    this.eventManager.emit("onLayoutReady");
  }
  onunload() {
    return __async(this, null, function* () {
      console.log("Unloading FolderTableContent");
      this.eventManager.removeAllListeners();
      if (this.graphManipulator != null) {
        this.graphManipulator.unload();
      }
      this.folderNodeModule.unload();
    });
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
      this.eventManager.emit("settingsUpdate", this.settings);
    });
  }
};
